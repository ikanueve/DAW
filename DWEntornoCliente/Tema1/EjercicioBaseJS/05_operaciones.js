var num1 = parseInt(prompt("Introduce el primer numero"));
var num2 = parseInt(prompt("Introduce el segundo valor"));

var suma = num1 + num2;
var resta = num1 - num2;
var multi = num1 * num2;
var div = num1 / num2;

if (num1 > 0 && num2 > 0) {
  alert(
    "La suma de " +
      num1 +
      " + " +
      num2 +
      " es " +
      " " +
      (num1 + num2) +
      "\n" +
      "La resta de " +
      num1 +
      " - " +
      num2 +
      " es " +
      " " +
      (num1 - num2) +
      "\n" +
      "La multiplicación de " +
      num1 +
      " * " +
      num2 +
      " es " +
      " " +
      num1 * num2 +
      "\n" +
      "La división de " +
      num1 +
      " / " +
      num2 +
      " es " +
      " " +
      num1 / num2 +
      "\n"
  );
  if (suma < 0 || resta < 0 || multi < 0 || div < 0) {
    stop();
  } else {
    var respuesta = confirm("¿Quieres volver a calcular?");
    if (respuesta) {
      location.reload();
    } else {
      stop();
    }
  }
} else {
  alert("Alguno de los numeros que has introducido es menor que 0 o no válido");
  location.reload();
}
