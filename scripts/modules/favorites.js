import { getFavorites, saveFavorites } from "../utils/storage.js";
import { showFavoritesMovie } from "./favoritesMovieCard.js";

export function starFavorites() {
    showFavoritesMovie().then(() => {
        const starIcons = document.querySelectorAll('.favorites-btn i'); 
        const favoritesList = getFavorites(); 

        starIcons.forEach(icon => {
            const movieData = JSON.parse(icon.parentElement.getAttribute('data-movie'));
            const isFavorite = favoritesList.some(fav => fav.Title === movieData.Title);
            
            if (isFavorite) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }
        });
    });
}

export function toggleFavorite(event) {
    const starIcon = event.currentTarget.querySelector('i');
    const button = event.currentTarget;
    const movieData = JSON.parse(button.getAttribute('data-movie'));
    let favorites = getFavorites(); 

    const exists = favorites.some(movie => movie.imdbID === movieData.imdbID);

    if (!exists) {
        favorites.push(movieData);
        saveFavorites(favorites);

        starIcon.classList.remove('fa-regular');
        starIcon.classList.add('fa-solid');
    } else {
        favorites = favorites.filter(movie => movie.imdbID !== movieData.imdbID);
        saveFavorites(favorites);

        starIcon.classList.remove('fa-solid');
        starIcon.classList.add('fa-regular');
    }

}

export function starFavoritesIcon(){
    const starIcons = document.querySelectorAll('.favorites-btn i');
    const starIconsInfo = document.querySelectorAll('.favorites-info-btn i')
    const favoritesList = getFavorites();

    starIcons.forEach(icon => {
        const button = icon.closest('.favorites-btn');
        const movieData = JSON.parse(button.getAttribute('data-movie'));

        
        const exists = favoritesList.some(movie => movie.imdbID === movieData.imdbID);

        if (exists) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    });

    starIconsInfo.forEach(icon => {
        const button = icon.closest('.favorites-info-btn');
        const movieData = JSON.parse(button.getAttribute('data-movie'));

        
        const exists = favoritesList.some(movie => movie.imdbID === movieData.imdbID);

        if (exists) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    });
}
