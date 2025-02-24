import { fetchMovieLibrary } from "./api.js";

/* document.querySelector('#searchBtn').addEventListener('click', async () => {
    await fetchMovieLibrary()
    window.location.href ='search.html';
    console.log(fetchMovieLibrary())
    console.log('hej')
}) */



/* export function toggleFavorite(event) {
    const starIcon = event.currentTarget.querySelector('i');
    const button = event.currentTarget;
    const imdbID = button.getAttribute('imdbid-data');

    let favorites = localStorage.getItem('favorites');

    if (starIcon.classList.contains('fa-regular')) {

        if(!favorites.includes(imdbID)){
            favorites.push(imdbID);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }

        starIcon.classList.remove('fa-regular');
        starIcon.classList.add('fa-solid');
        return true
    } else {
        favorites = favorites.filter(id => id !== imdbID);
        localStorage.setItem('favorites', JSON.stringify(favorites));

        starIcon.classList.remove('fa-solid');
        starIcon.classList.add('fa-regular');
        return false
    }
} */

export function toggleFavorite(event) {
    const starIcon = event.currentTarget.querySelector('i');
    const button = event.currentTarget;
    const movieData = JSON.parse(button.getAttribute('data-movie')); // Hämta hela filmobjektet

    let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Hämta sparade filmer

    // Kolla om filmen redan finns i favoriter
    const exists = favorites.some(movie => movie.imdbID === movieData.imdbID);

    if (!exists) {
        // Lägg till filmen i favoriter
        favorites.push(movieData);
        localStorage.setItem('favorites', JSON.stringify(favorites));

        starIcon.classList.remove('fa-regular');
        starIcon.classList.add('fa-solid');
    } else {
        // Ta bort filmen från favoriter
        favorites = favorites.filter(movie => movie.imdbID !== movieData.imdbID);
        localStorage.setItem('favorites', JSON.stringify(favorites));

        starIcon.classList.remove('fa-solid');
        starIcon.classList.add('fa-regular');
    }
}




