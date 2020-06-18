<?php

class DBFunctions {
    public static function maxId($db, $tblName, $idName) {
      $sql = "SELECT MAX($idName) AS maxid FROM $tblName";
      $stmt = $db->prepare($sql);
      $stmt->execute();
      $num = $stmt->fetch();
      return $num['maxid'];
    }
    public static function existData($db, $tblName, $idName, $id) {
      try{
        $sql = "SELECT $idName FROM $tblName WHERE $idName = $id";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $num = $stmt->fetch();
        return $num;
      } catch (PDOException $ex) {
        die($ex->errorInfo);
      }
    }
}

?>
