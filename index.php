<?php

// doit être appelé au début de chaque page où on veut accéder à $_SESSION
session_start();

// menu

require_once('./menu.php');

// on regarde si la personne est déjà loggée 


if (!isset($_SESSION['logged'])) {
	echo "
<h3>Connexion</h3>
<p>
Merci <a href='./login.php'>de vous connecter</a>
</p>
";
	die;
}
else {
	header('Location: /inside/');
}

