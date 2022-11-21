<html> <head>
<meta charset= "UTF-8">
<title></title>
</head> <body>
<?php
echo '<p>La fecha de hoy es:' .date('d/m/Y') .  '</p>';
echo '<p>La hora actual es:' .date('h:i:s') .  '</p>';
echo '<a href="Siguienteproblema">Siguiente problema</a>';

$anio = date('Y');

if ($anio == "2024" || $anio == "2028" || $anio == "2032"){
    echo '<p>Año bisiesto';
}else {
    echo '<p>Año no bisiesto';
}

$day = date('l');

if ($day == "Sunday"){
    echo '<p>Dia de la semana: Domingo</p>';
}

//echo '<p>Dia de la semana:' . $day . '</p>';

?>
</body> </html>