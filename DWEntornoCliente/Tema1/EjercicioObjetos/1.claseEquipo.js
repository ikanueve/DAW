class Equipo {

    plantilla = new Array();

    constructor(nombre, presupuesto){
       this.nombre = nombre;
       this.presupuesto = presupuesto;
    }

    ficharJugador(Jugador){
        this.plantilla.push(Jugador);
    }

    listaPlantilla(){
        this.plantilla.forEach(element => {
            console.log(element)
        });
    }
}

class Jugador{

    constructor(nombre, posicion, valor){
        this.nombre = nombre;
        this.posicion = posicion;
        this.valor = valor;
    }
}



