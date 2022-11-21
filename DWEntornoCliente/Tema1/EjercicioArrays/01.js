var numeros = new Array();
numeros = [1,2,3,4,5,6,7,8,9,10];
var i = 0;
var body = document.getElementById('body1');
body.innerHTML = '<h1>Iterado con While</h1>'

do{
  var num = '<p>'+ numeros[i]+'</p> '
    body.innerHTML += num; 
    i++;
}while ( i <10);

var bucle = document.getElementById('body2');
bucle.innerHTML = '<h1>Iterado con For</h1>'
for (let index = 0; index < numeros.length; index++) {
  var num = '<p>'+ numeros[index]+'</p> '
    bucle.innerHTML += num; 
  
}


var iterator = document.getElementById('body3');
iterator.innerHTML = '<h1> Iterado con forEach</h1>'

numeros.forEach(num => {
    iterator.innerHTML += '<p>' + num + '</p>';
});

var sumar = document.getElementById('body4');
sumar.innerHTML = '<h1> Sumando 1 a cada posición</h1>'

for (const n in numeros) {
    var suma = numeros[n] + 1;
    sumar.innerHTML += '<p>' + suma + '</p>';
}


var media = document.getElementById('body5');
media.innerHTML = '<h1> Media del array</h1>'
var suma = 0;
var longitud = numeros.length;

numeros.forEach(n => {
  suma += n;
});

var med = suma / longitud;
media.innerHTML += '<p>' + med + '</p>';
