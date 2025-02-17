import { fetchTopMovies } from "./api.js";
import { renderTrailers } from "./caroussel.js";
import { movieCard } from "../components/movieCard.js";

export async function getRandomMovieTrailers() {
    const trailers = await fetchTopMovies();
    let randomMovieTrailers = [];

    console.log(randomMovieTrailers)
    while (randomMovieTrailers.length < 5) {
        let randomMovieIndex = Math.floor(Math.random() * trailers.length)
        let randomMovieTrailer = trailers[randomMovieIndex]


        if (!randomMovieTrailers.includes(randomMovieTrailer)) {
            randomMovieTrailers.push(randomMovieTrailer);
        }
    }
    return randomMovieTrailers

}

export async function renderRandomTrailers(){
    let randomTrailers = await getRandomMovieTrailers()
    console.log(randomTrailers)
    document.querySelector('.trailers__container').innerText = ''

    randomTrailers.forEach((movie, index) => {
        renderTrailers(movie, index + 1);
    })

    return randomTrailers
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

export async function topMoviesCard (){
    
    let randomMovies = await randomTopMovies();

    randomMovies.forEach( (movie) => {
        movieCard(movie)
    })

}