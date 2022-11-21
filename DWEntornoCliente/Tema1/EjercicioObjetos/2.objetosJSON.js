let Equipo = {
    nombre : "",
    presupuesto : 0, 
    plantilla : [],
    ficharJugador : function (Jugador) {
        this.plantilla.push(Jugador);
    },
    listarPlantilla : function(){
        this.plantilla.forEach(element => {
            console.log(element)
        });
    }

}

let Jugador = {
    nombre : "",
    posicion: "",
    valor: 0
}

let barsa = {
    nombre : "Barcelona",
    presupuesto: 100000000,
    plantilla : [],
    ficharJugador : function (Jugador) {
        this.plantilla.push(Jugador);
    },
    listarPlantilla : function(){
        this.plantilla.forEach(element => {
            console.log(element)
        });
    }
}
let madrid = {
    nombre:"Real Madrid",
    presupuesto:1000000000,
    plantilla : [],
    ficharJugador : function (Jugador) {
        this.plantilla.push(Jugador);
    },
    listarPlantilla : function(){
        this.plantilla.forEach(element => {
            console.log(element)
        });
    }
};
let atleti = {
    nombre:"Atletico de Madrid", 
    presupuesto: 5000000,
    plantilla : [],
    ficharJugador : function (Jugador) {
        this.plantilla.push(Jugador);
    },
    listarPlantilla : function(){
        this.plantilla.forEach(element => {
            console.log(element)
        });
    }
};

barsa.ficharJugador({nombre: "Lewi", posicion: "Delantero", valor: 2300000});
barsa.ficharJugador({nombre: "Messi", posicion: "Delantero", valor: 500000});
barsa.ficharJugador({nombre: "Pedri", posicion: "Delantero", valor: 100000});
barsa.ficharJugador({nombre: "Gavi", posicion: "Medio", valor: 100000});
barsa.ficharJugador({nombre: "Xavi", posicion: "Medio", valor: 100000});
madrid.ficharJugador({nombre: "Ronaldo", posicion: "Delantero", valor: 150000});
madrid.ficharJugador({nombre: "Vini", posicion: "Delantero", valor: 300000});
madrid.ficharJugador({nombre: "Rodrigo", posicion: "Delantero", valor: 100000});
madrid.ficharJugador({nombre: "Modric", posicion: "Medio", valor: 200000});
madrid.ficharJugador({nombre: "Carvajal", posicion: "Defensa", valor: 100000});
atleti.ficharJugador({nombre: "Correa", posicion: "Delantero", valor: 100000});
atleti.ficharJugador({nombre: "Oblak", posicion: "Portero", valor: 200000});
atleti.ficharJugador({nombre: "Gimenez", posicion: "Defensa", valor: 1300000});
atleti.ficharJugador({nombre: "Joao", posicion: "Delantero", valor: 100000});
atleti.ficharJugador({nombre: "Griezman", posicion: "Delantero", valor: 180000});

function jugadoresCaros(Equipo){
    Equipo.plantilla.sort((a,b)=> b.valor - a.valor);

    return [Equipo.plantilla[0], Equipo.plantilla[1], Equipo.plantilla[2]]
}

jugadoresCaros(barsa);
jugadoresCaros(atleti);

console.log("Los jugadores más caros son: ")
console.log(madrid.nombre)
console.log(jugadoresCaros(madrid));
console.log(barsa.nombre)
console.log(jugadoresCaros(barsa));
console.log(atleti.nombre)
console.log(jugadoresCaros(atleti));