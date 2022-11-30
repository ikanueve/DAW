class Carta {

	constructor(valor, palo) {
		this.valor = valor;
		this.palo = palo;
	}
}

var cartas = [];
var cartasJugador = [];
var cartasCrupier = [];
var numeroCartas = 0;
var palos = ["C", "P", "T", "D"];

function generarCartas()
{
    for (i = 0; i < 4; i++) {
	for (j = 1; j <= 13; j++) {
		cartas.push(new Carta(j, palos[i]));
	}
    }
}

function barajarCartas()
{    
    for (i = 0; i < 100; i++) {
        cartas.splice(Math.random() * 52, 0, cartas[0]);
        cartas.shift();
    }
}

function pedirCarta() 
{
	if (numeroCartas < 10) {
		let cartaJugador = cartas[numeroCartas]; 
		cartasJugador.push(cartaJugador);
		numeroCartas++;
	}
    console.log("Tienes " + calcularPtosJugador() + " puntos")
}

function calcularPtosJugador()
{
    var puntosJugador = 0;

    for (i in cartasJugador) {
		puntosJugador += cartasJugador[i].valor;
	}
    
    return puntosJugador;
}

function plantarme()
{
    var puntosJugador = 0;
    var puntosCrupier = 0;

    for (i in cartasJugador) {
		puntosJugador += cartasJugador[i].valor;
	}

    console.log("Tienes " + puntosJugador + " puntos")

    while (puntosCrupier < 17) {
		cartasCrupier.push(cartas[numeroCartas]);
		puntosCrupier += cartas[numeroCartas].valor;
		numeroCartas++;
	}

    console.log("Puntos del Crupier: " + puntosCrupier)

    if (puntosJugador == 21) {
		console.log("Blackjack! Has ganado!");
	} else if (puntosJugador > 21) {
		console.log("Has perdido... Te has pasado de puntos");
	} else if (puntosCrupier > 21) {
		console.log("Has ganado! El crupier se ha pasado de puntos");
	} else if (puntosCrupier >= puntosJugador) {
		console.log("Ha ganado el crupier");
	} else {
		console.log("Has ganado!");
	}

    var jugar = prompt("¿Quieres jugar de nuevo? y/n")

    if (jugar == "y"){
        jugarDeNuevo();
    }
}

function jugarDeNuevo()
{
    location.reload();
}

generarCartas();
barajarCartas();




