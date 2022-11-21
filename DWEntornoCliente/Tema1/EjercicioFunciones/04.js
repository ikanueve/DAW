var baraja = new Array;

baraja.push('1C','2C','3C','4C','5C','6C','7C','8C','9C','JC','QC','KC',
'1D','2D','3D','4D','5D','6D','7D','8D','9D','JD','QD','KD',
'1R','2R','3R','4R','5R','6R','7R','8R','9R','JR','QR','KR',
'1P','2P','3P','4P','5P','6P','7P','8P','9P','JP','QP','KP');



var aleatorio = Math.random()*49
var carta = Math.round(aleatorio);


function sacarCarta(){
    var sacar = baraja[carta]
    return sacar;
}

function obtenerInformacion(carta){
    return carta;
}

console.log(sacarCarta())
console.log(obtenerInformacion(sacarCarta()))