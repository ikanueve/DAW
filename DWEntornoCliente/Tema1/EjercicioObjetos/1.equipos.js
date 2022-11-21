let barsa = new Equipo("Barcelona", 100000000);
let madrid = new Equipo("Real Madrid", 1000000000);
let atleti = new Equipo("Atletico de Madrid", 5000000);

barsa.ficharJugador(new Jugador("Lewi","Delantero",2300000));
barsa.ficharJugador(new Jugador("Messi","Delantero",500000));
barsa.ficharJugador(new Jugador("Pedri","Delantero",100000));
barsa.ficharJugador(new Jugador("Gavi","Medio",100000));
barsa.ficharJugador(new Jugador("Xavi","Medio",100000));
madrid.ficharJugador(new Jugador("Ronaldo","Delantero",150000));
madrid.ficharJugador(new Jugador("Vini","Delantero",300000));
madrid.ficharJugador(new Jugador("Rodrigo","Delantero",100000));
madrid.ficharJugador(new Jugador("Modric","Medio",200000));
madrid.ficharJugador(new Jugador("Carvajal","Defensa",100000));
atleti.ficharJugador(new Jugador("Correa","Delantero",100000));
atleti.ficharJugador(new Jugador("Oblak","Portero",200000));
atleti.ficharJugador(new Jugador("Gimenez","Defensa",1300000));
atleti.ficharJugador(new Jugador("Joao","Delantero",100000));
atleti.ficharJugador(new Jugador("Griezman","Delantero",180000));

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