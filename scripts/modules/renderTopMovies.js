import { movieCard } from "../components/movieCard.js";
import { randomTopMovies } from "../utils/randomize.js";

export async function topMoviesCard (){
    
    let randomMovies = await randomTopMovies();

    randomMovies.forEach( (movie) => {
        movieCard(movie)
    })

}