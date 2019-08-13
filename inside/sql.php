<?php

// $result = $mysqli->query('SELECT login FROM users WHERE x = 0;');
// $row = $result->fetch_all();
// var_dump($row);

session_start();

header('Content-type: application/json');

$result = '{';

$mysqli = mysqli_connect("localhost", "dbusertest", "dbpassword", "basetest");
$row = $mysqli->query('SELECT * FROM users;');
$users = $row->fetch_all();

for ($i = 0; $i < count($users);$i++) {
    // shorcut variable
    $d = $users[$i];
    
    $result .= ' "usercount": ' . '"' .strval(count($users)) . '", ' . '"login' . strval($i) . '": "' . $d[0] . '", "pw' . strval($i) . '": "' . $d[1]. '", "x'. strval($i) .'": "' .$d[2] . '", "y'. strval($i) .'":"'.$d[3].'"';

    if ($i < count($users)-1) {
        $result.= ',';
    }
}

$result .= '}';
echo ( $result);
