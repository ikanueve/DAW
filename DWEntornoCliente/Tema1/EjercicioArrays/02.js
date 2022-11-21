var lista = new Array();

for (let index = 0; index < 20; index++) {
  var aleatorio = Math.random()*101; 
  lista.push(Math.round(aleatorio));
};
console.log('Numeros generados:')
lista.forEach(n => {
  console.log(n);
});
console.log('Los pares son los siguientes números: ')

lista.forEach(n => {
  if (Math.round(n) % 2 == 0){
  console.log(n);}
});

console.log('El valor máximo es: ')
console.log(Math.max(...lista));

console.log('El valor mínimo es: ')
console.log(Math.min(...lista));

console.log('La media del array es de : ')
var suma = 0;
for (let index = 0; index < lista.length; index++) {
 
      suma += lista[index];
  }

var media = suma / lista.length;
console.log(suma)
console.log(lista.length)
console.log(media)
