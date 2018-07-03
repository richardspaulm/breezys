<?php
$email = $_POST["email"];
$textFile = "emailList.txt";
$file = fopen($textFile, "a");
fwrite($file, $email);
fclose($file);
die(header("Location: ".$_SERVER["HTTP_REFERER"]));
?>