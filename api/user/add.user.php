<?php
    require('../db.inc.php');
    require('../validate.inc.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $name = $request->name;
    $pw = $request->pw;
    $email = $request->email;
    $message = [];

    $isMail = Validate::filterEmail($email);
    $isName = Validate::emptyString($name);
    $isPw =  Validate::emptyString($pw);
    
    if($isMail || $isName || $isPw) {
        return http_response_code(400);
    }

    var_dump($request);
    $stmt = $pdo->prepare("INSERT INTO `user`(`name`, `email`, `pw`)
             VALUE(:name, :email, :pw)"); 
    $stmt->bindParam(':name', $name, PDO::PARAM_STR);   
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);   
    $stmt->bindParam(':pw', $pw, PDO::PARAM_STR);   
    
    
    $stmt->execute();
    

?>