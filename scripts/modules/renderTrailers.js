import { getRandomMovieTrailers } from "../utils/randomize.js"
import { renderTrailers } from "./caroussel.js"

export async function renderRandomTrailers(){
    let randomTrailers = await getRandomMovieTrailers()
    document.querySelector('.trailers__container').innerText = ''

    randomTrailers.forEach((movie, index) => {
        renderTrailers(movie, index + 1);
    })

    return randomTrailers
}