import { movieCard } from "./movieCard.js";
import { randomTopMovies } from "./randomTopMovies.js";

export async function topMoviesCard (){
    
    let randomMovies = await randomTopMovies();

    randomMovies.forEach( (movie) => {
        movieCard(movie)
    })

}