const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();

console.log('El valor máximo es ' + ages[9]+ ' y el mínimo es ' + ages[0] )

var suma = 0;
var longitud = ages.length;
for (let index = 0; index < ages.length; index++) {
   suma += ages[index];
   
}

var media = suma/longitud;

console.log('La madia de edad es: ' + media)