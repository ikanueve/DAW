var precio = parseInt(prompt('Precio de la casa que se va a comprar'))
var dinero = parseInt(prompt('Dinero que le va a pedir al banco'))
var meses = parseInt(prompt('Número de años en los que lo va a devolver')*12)
var interes = (prompt('% de interes que se le va a aplicar')/100)

console.log(precio + ' ' + dinero + ' ' + meses + ' ' + interes)



function calcularInteresesMensuales(){
    var din = dinero * interes;
    var mensual = din/meses
    return mensual;
}

function calcularInteresTotal(){
    var din = dinero * interes;
   
    return din;
}

function cuotaMensual(){
    var cuota = (dinero/meses)+ calcularInteresesMensuales()
    return cuota;
}

function despliegueMensual(){
        var pasta = dinero;
        var cuota = cuotaMensual();
    for (let index = 1; index < meses+1; index++) {
        
        console.log('Pago corresponciente al mes ' + index+ ' con una cantidad de ' + pasta)
        pasta = pasta - cuota;
    }
}

console.log('Vas a pagar al banco' + ' ' + calcularInteresTotal() + ' en ' + meses + ' mensualidades, pagando una cuota mensual de: ' + cuotaMensual() )

console.log(
despliegueMensual()

)