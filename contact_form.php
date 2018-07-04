<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$doc = "customerMessages.txt";
$content = "CUSTOMER MESSAGE" . "\n" . "NAME: " . $name . "\n" . "EMAIL: " . $email . "\n" . "MESSAGE: " . $message . "\n \n";
$file = fopen($doc, "a");
fwrite($file, $content);
fclose($file);
die(header("Location: ".$_SERVER["HTTP_REFERER"]));
?>