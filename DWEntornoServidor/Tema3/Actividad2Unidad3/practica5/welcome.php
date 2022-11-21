<html> <head>
<meta charset= "UTF-8">
<title></title>
</head> <body>
    <h2>Este es el formulario para DAW2</h2>
<form action="welcome.php" method="post">
  <p>INTRODUZCA SU NOMBRE</p>
      <input type="text" name="name"><br>
  <p>INTRODUZCA SU EMAIL</p>
        <input type="text" name="email"><br>

  <p>COMENTARIOS</p>
  <input type="textarea" name="coments"><br>

  <input type="submit"><input type="reset"><br>
Bienvenido <?php echo $_POST["name"]; ?><br>
Tu correo es: <?php echo $_POST["email"]; ?>
</form>
</body> </html>