import { fetchTopMovies } from "../modules/api.js";

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

