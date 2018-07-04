<?php
$email = $_POST["email"];
$textFile = "emailList.txt";
$contents = $email . "\n";
$file = fopen($textFile, "a");
fwrite($file, $contents);
fclose($file);
die(header("Location: ".$_SERVER["HTTP_REFERER"]));
?>