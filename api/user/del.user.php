<?php

require('../db.inc.php');
require('../db.function.inc.php');
require('../validate.inc.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$idUser = $request->id;

$isIdUser = Validate::minNumber((int)$isIdUser, 0);

if($isIdUser) {
  http_response_code(400);
}

if(DBFunctions::existData($pdo, 'user', 'userId', $idUser)) {
  $sql = "DELETE FROM `user` WHERE `userId` = :id";

    $stmt = $pdo->prepare($sql);
  $stmt->bindParam(':id', $idUser, PDO::PARAM_STR);

  if ($stmt->execute()) {
    echo "User mit der ID $idUser gelöscht";
  } else {
    http_response_code(404);
  }
} else {
  http_response_code(404);
}

// if(Validate::maxNumber($idUser, $maxid)) {
//   echo 'Wert ist zu Hoch';
// }




?>
