<?php
    require('../db.inc.php');
    require('../validate.inc.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $id = $request->bibleID;
    $titleLong = $request->titleLong;
    $titleSmall = $request->titleSmall;
    $link = $request->link;
    $image = $request->image;
    $verse = $request->verse;
    $chapter = $request->chapter;
    $author = $request->author;
    $time = $request->time;
    $type = $request->type;

    // var_dump($request);
    $stmt = $pdo->prepare("UPDATE `bible` SET
                  `titleLong` = :titleLong,
                  `titleSmall` = :titleSmall,
                  `verse` = :verse,
                  `chapter = :chapter`,
                  `image` = :image,
                  `link` = :link,
                  `author` = :author,
                  `time` = :time,
                  `type` = :type)
                    WHERE `bibleID` = :id LIMIT 1");

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
