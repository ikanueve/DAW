var num1 = parseInt(prompt('Introduce el primer número'))
var num2 = parseInt(prompt('Introduce el segundo número'))

function sumar(num1,num2){
    console.log("La suma es: " + (Number (num1) + Number (num2)))
    return (Number (num1) + Number (num2));
}

function restar(num1,num2){
    console.log("La resta es: " + (Number (num1) - Number (num2)))

    return (Number (num1) - Number (num2));
}

function multiplicar(num1,num2){
    console.log("La multiplicación es: " + (Number (num1) + Number (num2)))

    return (Number (num1) * Number (num2));
}

function dividir(num1,num2){
    console.log("La división es: " + (Number (num1) / Number (num2)))

    return (Number (num1) / Number (num2));
}

try {
   suma(num1,num2,num3);   
} catch (error) {
   alert("Has introducido más de dos parametros")
   console.error("Has introducido más de dos parametros")
} 

try {
   suma(num1);
} catch (error) {
   alert("Has introducido un sólo parametro")
   console.error("Has introducido sólo un parametro")
}

