<?php

session_start();

if (!isset($_SESSION['logged']) || !isset($_POST) || !isset($_SERVER['CONTENT_TYPE']) || $_SERVER['CONTENT_TYPE'] !== 'application/json') {
    phpinfo();
    http_response_code(403);
    die;
}

$content = trim(file_get_contents('php://input'));
$decoded = json_decode($content, true);

if (!is_array($decoded)) {
    throw new Exception('Incorrect');
}

header('Content-type: application/json');

//error_log(serialize($decoded));
//echo '{"a":"' . $decoded[0] . '"}';
//echo '{"login": "' . $decoded["x"] . '", "pw":"'."b".'", "x":"'."c".'", "y":"'."d".'"}';

$mysqli = mysqli_connect("localhost", "dbusertest", "dbpassword", "basetest");
$sqlx = "UPDATE users SET x=" .$decoded['x']." WHERE login = '".$_SESSION['userdata'][0][0]."';";
$sqly = "UPDATE users SET y=" .$decoded['y']." WHERE login = '".$_SESSION['userdata'][0][0]."';";
//$sql = "UPDATE users SET x=0 WHERE login = 'alex'";

if ($mysqli->query($sqlx) === TRUE && $mysqli->query($sqly) === TRUE) {
    //echo '{"result": "'. $_SESSION['userdata'][0][0] .'"}';
    echo '{"result": "updated successfully"}';
} else {
    echo '{"result": "failed"}';
}

//echo '{"a":"' . $decoded[0] . '"}';