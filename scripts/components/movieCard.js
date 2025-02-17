import { toggleFavorite } from "../modules/eventHandler.js";

export function movieCard(movie) {
    const cardContainer = document.querySelector('#cardContainer');

    const title = movie.Title || "Title Okänd";
    const poster = movie.Poster;

    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const moviePoster = document.createElement('img');
    moviePoster.classList.add('movie-poster');
    moviePoster.src = poster;

    const favoritesBtn = document.createElement('button');
    favoritesBtn.classList.add('favorites-btn');

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