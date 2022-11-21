var frase = prompt('Introduce una frase');

if (frase.length < 10){
    alert('Frase no válida, mínimo 10 letras')
}

console.log(frase);
var letras = frase.replace(/\s+/g, '');
var punto = letras.replace(/\.*/g,'')
console.log(punto)
console.log('Hay ' + punto.length + ' letras');
var palabras = frase.split(' ').length;
console.log('Hay ' + palabras + ' palabras')
var frase = frase.split('.').length;
console.log('Hay ' + frase + ' frases')
alert('El dato introducido tiene: \n'+
 punto.length + ' letras \n'+ 
 palabras + ' palabras \n' + 
 frase + ' frases')