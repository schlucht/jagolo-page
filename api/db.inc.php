<?php

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With Content-Type");
    $DB_HOST = 'localhost';
    $DB_USER = 'schmidschluch2';
    $DB_PASS = 'jagolo';
    $DB_NAME = 'schmidschluch2';

    $db = "mysql:host={$DB_HOST};dbname={$DB_NAME}";


    // Connect with the database.
  try {
    $pdo = new PDO($db, $DB_USER, $DB_PASS, array(
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ));
  } catch (PDOException $error) {
    http_response_code(404);
    echo 'Db is down!', $error->errorInfo;
  }

?>
