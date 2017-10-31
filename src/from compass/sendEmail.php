<?php

	$file = "data.json";
	$json_string = json_encode($_POST, JSON_PRETTY_PRINT);
	file_put_contents($file, $json_string, FILE_APPEND);
	header('Location: index.php?mail=success'); 
	exit;

?>



<?php
/* 
$req = array('name', 'email', 'message');
foreach ($req as $campo) {
    $_POST[$campo] = trim($_POST[$campo]);
    print $_POST[$campo];
    if ($_POST[$campo] == "") salir_con_error();
}

function salir_con_error() {
    echo("<meta http-equiv='refresh' content='0; URL=http://www.sadmedia.com/index.php?mail=error'>");
    exit;
}

$cuerpo  = sprintf(
    "Mensaje de %s <%s> (%s)\n",
    $_POST['name'], $_POST['email']
);
$cuerpo .= "From: " . $_POST['name'] . " (" . $_POST[email] . ")\nSubject: " .$_POST [subject] . "\nComments: " .$_POST [message];

mail(
    "ddaniel.gomez@gmail.com", "Mensaje desde la web", $cuerpo, "From: info@sadmedia.com"
);

echo("<meta http-equiv='refresh' content='0; URL=http://www.sadmedia.com/index.php?mail=success'>");
exit;
*/
?>