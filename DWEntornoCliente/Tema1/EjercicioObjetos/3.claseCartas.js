let baraja = new Array();

class Carta {

    constructor(nombre, valor, imagen){
        this.nombre = nombre;
        this.valor = valor;
        this.imagen = imagen;
    }
}

let cartaCoraCero = new Carta("1C", 1 , "");
let cartaCoraUno = new Carta("2C", 2 , "");
let cartaCoraDos = new Carta("3C", 3 , "");
let cartaCoraTres = new Carta("4C", 4 , "");
let cartaCoraCuatro = new Carta("5C", 5 , "");
let cartaCoraCinco = new Carta("6C", 6 , "");
let cartaCoraSeis = new Carta("7C", 7 , "");
let cartaCoraSiete = new Carta("8C", 8 , "");
let cartaCoraOcho = new Carta("9C", 9 , "");
let cartaCoraNueve = new Carta("10C", 10 , "");
let cartaCoraDiez = new Carta("JC", 11 , "");
let cartaCoraOnce = new Carta("QC", 12 , "");
let cartaCoraDoce = new Carta("KC", 13 , "");
let cartaPicaCero = new Carta("1P", 1 , "");
let cartaPicaUno = new Carta("2P", 2 , "");
let cartaPicaDos = new Carta("3P", 3 , "");
let cartaPicaTres = new Carta("4P", 4 , "");
let cartaPicaCuatro = new Carta("5P", 5 , "");
let cartaPicaCinco = new Carta("6P", 6 , "");
let cartaPicaSeis = new Carta("7P", 7 , "");
let cartaPicaSiete = new Carta("8P", 8 , "");
let cartaPicaOcho = new Carta("9P", 9 , "");
let cartaPicaNueve = new Carta("10P", 10 , "");
let cartaPicaDiez = new Carta("JP", 11 , "");
let cartaPicaOnce = new Carta("QP", 12 , "");
let cartaPicaDoce = new Carta("KP", 13 , "");
let cartaTreCero = new Carta("1T", 1 , "");
let cartaTreUno = new Carta("2T", 2 , "");
let cartaTreDos = new Carta("3T", 3 , "");
let cartaTreTres = new Carta("4T", 4 , "");
let cartaTreCuatro = new Carta("5T", 5 , "");
let cartaTreCinco = new Carta("6T", 6 , "");
let cartaTreSeis = new Carta("7T", 7 , "");
let cartaTreSiete = new Carta("8T", 8 , "");
let cartaTreOcho = new Carta("9T", 9 , "");
let cartaTreNueve = new Carta("10T", 10 , "");
let cartaTreDiez = new Carta("JT", 11 , "");
let cartaTreOnce = new Carta("QT", 12 , "");
let cartaTreDoce = new Carta("KT", 13 , "");
let cartaDiCero = new Carta("1D", 1 , "");
let cartaDiUno = new Carta("2D", 2 , "");
let cartaDiDos = new Carta("3D", 3 , "");
let cartaDiTres = new Carta("4D", 4 , "");
let cartaDiCuatro = new Carta("5D", 5 , "");
let cartaDiCinco = new Carta("6D", 6 , "");
let cartaDiSeis = new Carta("7D", 7 , "");
let cartaDiSiete = new Carta("8D", 8 , "");
let cartaDiOcho = new Carta("9D", 9 , "");
let cartaDiNueve = new Carta("10D", 10 , "");
let cartaDiDiez = new Carta("JD", 11 , "");
let cartaDiOnce = new Carta("QD", 12 , "");
let cartaDiDoce = new Carta("KD", 13 , "");

baraja.push(
    cartaCoraCero,
    cartaCoraUno, 
    cartaCoraDos, 
    cartaCoraTres,
    cartaCoraCuatro,
    cartaCoraCinco, 
    cartaCoraSeis, 
    cartaCoraSiete, 
    cartaCoraOcho, 
    cartaCoraNueve, 
    cartaCoraDiez, 
    cartaCoraOnce, 
    cartaCoraDoce,
    cartaDiCero,
    cartaDiUno, 
    cartaDiDos, 
    cartaDiTres,
    cartaDiCuatro,
    cartaDiCinco, 
    cartaDiSeis, 
    cartaDiSiete, 
    cartaDiOcho, 
    cartaDiNueve, 
    cartaDiDiez, 
    cartaDiOnce, 
    cartaDiDoce,
    cartaTreCero,
    cartaTreUno, 
    cartaTreDos, 
    cartaTreTres,
    cartaTreCuatro,
    cartaTreCinco, 
    cartaTreSeis, 
    cartaTreSiete, 
    cartaTreOcho, 
    cartaTreNueve, 
    cartaTreDiez, 
    cartaTreOnce, 
    cartaTreDoce,
    cartaPicaCero,
    cartaPicaUno, 
    cartaPicaDos, 
    cartaPicaTres,
    cartaPicaCuatro,
    cartaPicaCinco, 
    cartaPicaSeis, 
    cartaPicaSiete, 
    cartaPicaOcho, 
    cartaPicaNueve, 
    cartaPicaDiez, 
    cartaPicaOnce, 
    cartaPicaDoce);

    console.log(baraja);