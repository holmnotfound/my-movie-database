import { fetchTopMovies } from "../modules/api.js"


export async function getRandomMovieTrailers() {
    const trailers = await fetchTopMovies();
    let randomMovieTrailers = [];

    while (randomMovieTrailers.length < 5) {
        let randomMovieIndex = Math.floor(Math.random() * trailers.length)
        let randomMovieTrailer = trailers[randomMovieIndex]


        if (!randomMovieTrailers.includes(randomMovieTrailer)) {
            randomMovieTrailers.push(randomMovieTrailer);
        }
    }
    return randomMovieTrailers

}

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