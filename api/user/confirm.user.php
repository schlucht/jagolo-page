<?php

require('../db.inc.php');
require('../validate.inc.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$name = $request->name;
$pw = $request->pw;

$isName = Validate::emptyString($name);
$isPw = Validate::emptyString($pw);

if($isName || $isPw) {
  http_response_code(400);
}

$sql = "SELECT `userId`, `name`, `email`, `pw` FROM `user` WHERE `name` = :name AND `pw` = :pw";

$stmt = $pdo->prepare($sql);
$stmt->bindParam(':name', $name, PDO::PARAM_STR);
$stmt->bindParam(':pw', $pw, PDO::PARAM_STR);

if($stmt->execute()) {
  if($user = $stmt->fetch()) {
    $userlist = ['name' => $user['name'], 'email' => $user['email']];
    echo json_encode($userlist);
  } else {
    http_response_code(401);
  }
} else {
  http_response_code(404);
}

?>
