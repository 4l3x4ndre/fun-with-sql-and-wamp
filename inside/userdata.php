<?php

session_start();

header('Content-type: application/json');

// variable shortcut
$d = $_SESSION['userdata'];

//var_dump($d);

echo '{"login": "' . $d[0][0] . '", "pw":"'.$d[0][1].'", "x":"'.$d[0][2].'", "y":"'.$d[0][3].'"}';