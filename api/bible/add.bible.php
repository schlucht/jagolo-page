<?php
    require('../db.inc.php');
    require('../validate.inc.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $titleLong = $request->titleLong;
    $titleSmall = $request->titleSmall;
    $link = $request->link;
    $image = $request->image;
    $verse = $request->verse;
    $chapter = $request->chapter;
    $author = $request->author;
    $time = $request->time;
    $type = $request->type;

  $stmt = $pdo->prepare("INSERT INTO `bible`(
                  `titleLong`,
                  `titleSmall`,
                  `verse`,
                  `chapter`,
                  `image`,
                  `link`,
                  `author`,
                  `time`,
                  `type`)
           VALUE( :titleLong,
                  :titleSmall,
                  :verse,
                  :chapter,
                  :image,
                  :link,
                  :author,
                  :time,
                  :type)");
  $stmt->bindParam(':titleLong', $titleLong, PDO::PARAM_STR);
  $stmt->bindParam(':titleSmall', $titleSmall, PDO::PARAM_STR);
  $stmt->bindParam(':verse', $verse, PDO::PARAM_INT);
  $stmt->bindParam(':chapter', $chapter, PDO::PARAM_INT);
  $stmt->bindParam(':image', $image, PDO::PARAM_STR);
  $stmt->bindParam(':link', $link, PDO::PARAM_STR);
  $stmt->bindParam(':author', $author, PDO::PARAM_STR);
  $stmt->bindParam(':time', $time, PDO::PARAM_STR);
  $stmt->bindParam(':type', $type, PDO::PARAM_STR);
  $stmt->execute();

    ?>
