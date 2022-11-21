var i, rep;
var solucion = "";

var numrep = prompt("Introduce numero de repeticiones");

if (numrep > 0) {
  for (i = 1; i <= numrep; i++) {
    for (rep = 0; rep < i; rep++) {
      solucion += "+" + " ";
    }

    solucion += "\n";
  }

  console.log(solucion);
} else {
  console.log("El número no puede ser negativo ni 0");
  var mensaje = prompt("Si quieres volver a probar, introduce 1");
  if (mensaje == 1) {
    location.reload();
  } else {
    alert("Se va a recargar la página");
    location.reload();
  }
}
