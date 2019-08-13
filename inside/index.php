<?php

// si on n'est pas loggué on retourne à la racine

// je dois appeler session_start pour initialiser $_SESSION
session_start();

if (!isset($_SESSION['logged'])) {
	header('Location: ../');
	// on met fin à la page immédiatement
	die;
}

include('index.html');

?>
