var fechaInicio = new Date;
fechaInicio.getTime();
var fechaCumple = prompt('Introduce tu cumpleaños en el siguiente formato yyyy-mm-dd')
var fechaFin = new Date(fechaCumple).getTime();

var diff = fechaInicio - fechaFin

console.log('Han pasado ' + (diff/(1000*60*60*24)).toFixed(0) + ' dias desde tu cumpleaños' );
   