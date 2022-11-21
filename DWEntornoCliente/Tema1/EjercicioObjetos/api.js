const API_URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=4ef66e12cddbb8fe9d4fd03ac9632f6e&language=es-ES&page=1";

peliculas = new Array();
fetch(API_URL)
.then((response) => response.json())
.then((response) => 
{
    response.results.forEach(element => {
        peliculas.push(element);
        
    });
    
    function pelisValoradas(){
    peliculas.forEach(element => {
        if(element.vote_average >= 5){
            console.log(element)
        }
    });
    }

    function actorPelicula(Actor){
        console.log(Actor)
    }

    pelisValoradas();
    actorPelicula("Penelope Cruz");
})

