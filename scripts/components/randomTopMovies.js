import { fetchTopMovies } from "../modules/api.js";

export async function randomTopMovies () {
    let movies = await fetchTopMovies();
    
    let topTwentyMovies = [];

    while(topTwentyMovies.length < 20 ){
        let randomTopMoviesIndex = Math.floor(Math.random() * movies.length);
        let topTwentyMovie = movies[randomTopMoviesIndex]

        if(!topTwentyMovies.includes(topTwentyMovie)){
            topTwentyMovies.push(topTwentyMovie)
        }
    }

    return topTwentyMovies
}