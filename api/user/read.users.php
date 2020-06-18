<?php

require('../db.inc.php');

  $sql = "SELECT `userId`, `name`, `email`, `pw` FROM `user`";
$stmt = $pdo->prepare($sql);

if($stmt->execute()) {
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

  $userlist = [];
  $i = 0;
  foreach ($rows as $row) {
      // var_dump($row['name']);
      $userlist[$i]['userId'] = $row['userId'];
      $userlist[$i]['name'] = $row['name'];
      $userlist[$i]['email'] = $row['email'];
      $userlist[$i]['pw'] = $row['pw'];
      $i++;
  }

  echo json_encode($userlist);
} else {
  http_response_code(404);
}

?>
