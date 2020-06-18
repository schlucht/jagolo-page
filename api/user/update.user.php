<?php
    require('../db.inc.php');
    require('../validate.inc.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $name = $request->name;
    $id = $request->id;
    $email = $request->email;
    $message = [];

    $isMail = Validate::filterEmail($email);
    $isName = Validate::emptyString($name);
    $isId =  Validate::minNumber((int)$id, 0);

    if($isMail || $isName || $isId) {
        return http_response_code(400);
    }

    // var_dump($request);
    $stmt = $pdo->prepare("UPDATE `user` SET
                                `name` = :name,
                                `email` = :email
                                WHERE `userId` = :id LIMIT 1");

    $stmt->bindParam(':name', $name, PDO::PARAM_STR);
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);


    $stmt->execute();


?>
