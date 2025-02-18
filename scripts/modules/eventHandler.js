import { fetchMovieLibrary } from "./api.js";

/* document.querySelector('#searchBtn').addEventListener('click', async () => {
    await fetchMovieLibrary()
    window.location.href ='search.html';
    console.log(fetchMovieLibrary())
    console.log('hej')
}) */



export function toggleFavorite(event) {
    const starIcon = event.currentTarget.querySelector('i');

    if (starIcon.classList.contains('fa-regular')) {
        starIcon.classList.remove('fa-regular');
        starIcon.classList.add('fa-solid');
        return true
    } else {
        starIcon.classList.remove('fa-solid');
        starIcon.classList.add('fa-regular');
        return false
    }
}



