import { toggleFavorite } from "../modules/eventHandler.js";
import { addPosterClick } from "./show-movie-info.js";

export function movieCard(movie) {
    const cardContainer = document.querySelector('#cardContainer');

    const title = movie.Title || "Title Okänd";
    const poster = movie.Poster || 'ingen bild';
    /* const imdbID = movie.imdbID; */

    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const moviePoster = document.createElement('img');
    moviePoster.classList.add('movie-poster');
    moviePoster.src = poster;
    moviePoster.alt = title;

    
    addPosterClick(moviePoster, movie.imdbID);

    const favoritesBtn = document.createElement('button');
    favoritesBtn.classList.add('favorites-btn');
    favoritesBtn.setAttribute('data-movie', JSON.stringify(movie));

    const starIcon = document.createElement('i');
    starIcon.classList.add('fa-regular', 'fa-star')

    const movieTitle = document.createElement('p');
    movieTitle.classList.add('movie-title');
    movieTitle.textContent = title;

    favoritesBtn.appendChild(starIcon)
    movieCard.append(moviePoster,favoritesBtn, movieTitle);
    cardContainer.append(movieCard);

    favoritesBtn.addEventListener('click', toggleFavorite);


}