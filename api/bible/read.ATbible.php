<?php

require('../db.inc.php');

$sqlAT = "SELECT `bibleID`,
                  `titleLong`,
                  `verse`,
                  `chapter`,
                  `image`,
                  `link`,
                  `titleSmall`,
                  `author`,
                  `time`,
                  `type`
          FROM `bible`
          WHERE `type` = 'AT'";

$stmt = $pdo->prepare($sqlAT);

if($stmt->execute()) {
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $bibleList = [];
  $i = 0;
  foreach($rows as $row) {
    $bibleList[$i]['id'] = $row['bibleID'];
    $bibleList[$i]['titleLong'] = $row['titleLong'];
    $bibleList[$i]['verse'] = $row['verse'];
    $bibleList[$i]['chapter'] = $row['chapter'];
    $bibleList[$i]['image'] = $row['image'];
    $bibleList[$i]['link'] = $row['link'];
    $bibleList[$i]['titleSmall'] = $row['titleSmall'];
    $bibleList[$i]['author'] = $row['author'];
    $bibleList[$i]['time'] = $row['time'];
    $bibleList[$i]['type'] = $row['type'];
    $i++;
  }
  echo json_encode($bibleList);
} else {
  http_response_code(404);
}


?>
