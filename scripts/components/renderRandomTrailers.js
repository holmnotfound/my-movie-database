import { renderTrailers } from "../modules/caroussel.js";
import { getRandomMovieTrailers } from "./randomMovieTrailers.js";

export async function renderRandomTrailers(){
    let randomTrailers = await getRandomMovieTrailers()
    console.log(randomTrailers)
    document.querySelector('.trailers__container').innerText = ''

    randomTrailers.forEach((movie, index) => {
        renderTrailers(movie, index + 1);
    })

    return randomTrailers
}