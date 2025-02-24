import { fetchMovieLibrary } from "../modules/api.js";
import { movieCard } from "./movieCard.js";

export async function renderSearchMovie() {
    const cardContainer = document.querySelector('#cardContainer')
    cardContainer.innerHTML = '';

    const movies = await fetchMovieLibrary();
    

    localStorage.setItem('movies', JSON.stringify((movies)));

    let moviesInfo = JSON.parse(localStorage.getItem('movies'));
    console.log(moviesInfo)

    /* movies.Search.forEach((movie) => {
        movieCard(movie)
    }) */
    let array = JSON.parse(localStorage.getItem('movies'));
    console.log(array);
    array.Search.forEach((array) => {
        movieCard(array)
    })
}

export function saveSearchValue() {
    let searchInput = document.querySelector('#searchInput');
    let searchValue = searchInput.value;
    console.log('saveinputvalu')
    localStorage.setItem('search', JSON.stringify((searchValue)))
    console.log(searchValue)

}

/* export async function getMovieArray(){
    let array = JSON.parse(localStorage.getItem('movies'));
       console.log(array);

    array.Search.forEach((array)=> {
        movieCard(array)
    })
} */


export function searchBtnFunc() {
    let searchBtn = document.querySelector('#searchBtn')

    searchBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let searchInput = document.querySelector('#searchInput');
        let searchValue = searchInput.value;
        console.log(searchValue)
        saveSearchValue();
        /* saveSearch(); */
        window.location.href = 'search.html'
        /* setTimeout(() => {
            window.location.href ='search.html';
        }, 1000); */

    })

}