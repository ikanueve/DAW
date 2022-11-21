var baraja = new Array;

baraja.push('1C','2C','3C','4C','5C','6C','7C','8C','9C','JC','QC','KC',
'1D','2D','3D','4D','5D','6D','7D','8D','9D','JD','QD','KD',
'1R','2R','3R','4R','5R','6R','7R','8R','9R','JR','QR','KR',
'1P','2P','3P','4P','5P','6P','7P','8P','9P','JP','QP','KP');

_.shuffle(baraja, 48);
console.log(baraja[0]);
console.log(baraja.length)
baraja.forEach(carta => {
    console.log(carta);
});

do{
    /*baraja.forEach(card => {
        var aleatorio = Math.random()*49;
        var redonAleat = Math.round(aleatorio);
        var seleccionada = baraja[redonAleat];
        console.log('Carta seleccionada');
        console.log(seleccionada);
        delete(baraja[redonAleat]);
        

    });*/

    for (let i = 0; i < 48; i++) {
        var aleatorio = Math.random()*baraja.length;
        var redonAleat = Math.round(aleatorio);
        var seleccionada = baraja[redonAleat];
        console.log('Carta seleccionada');
        console.log(seleccionada);
        delete(baraja[redonAleat]);
        baraja.length --;
        
    }

} while (baraja.length == 0)

console.log(baraja.length)
