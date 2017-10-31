<?php
	$string = file_get_contents("i18n/en.json");
	$i18n = json_decode($string);
?>

<!DOCTYPE html>
<html>
    <head></head>
    <body>
    	<p>--
	    	<?php print $i18n->{'slogan'}; ?>
    	--</p>
    </body>
</html>