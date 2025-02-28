import { fetchMovieLibrary } from "../modules/api.js";
import { saveSearchQuery, getSearchQuery, saveMovies, getMovies } from "../utils/storage.js";
import { movieCard } from "./movieCard.js";

export async function renderSearchMovie() {
    const cardContainer = document.querySelector('#cardContainer')
    cardContainer.innerText = '';

    const movies = await fetchMovieLibrary();


    const search = getSearchQuery();

    if (!search) {
        const message = document.createElement('h2');
        message.classList.add('search__message');
        message.textContent = `No search was written in`;
        cardContainer.append(message);
    } else if (!movies || movies.Response === "False") {
        const message = document.createElement('h2');
        message.classList.add('search__message');
        message.textContent = `${search} was not found`;
        cardContainer.append(message);
    } else {
        makeSearchCards();
    }

}

async function makeSearchCards() {
    const cardContainer = document.querySelector('#cardContainer')
    cardContainer.innerHTML = '';

    const movies = await fetchMovieLibrary();

    saveMovies(movies);
    let moviesArray = getMovies();

    moviesArray.Search.forEach((array) => {
        movieCard(array)
    })
}

function saveSearchValue() {
    let searchInput = document.querySelector('#searchInput');
    let searchValue = searchInput.value;
    saveSearchQuery(searchValue);
}


export function searchBtnFunc() {
    let searchBtn = document.querySelector('#searchBtn')

    searchBtn.addEventListener('click', (event) => {
        event.preventDefault();
        saveSearchValue();
        window.location.href = 'search.html';
    })

}