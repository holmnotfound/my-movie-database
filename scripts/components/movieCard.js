import { toggleFavorite, starFavoritesIcon } from "../modules/favorites.js";
import { addPosterClick } from "../modules/movieDetails.js";

export function movieCard(movie) {
    const cardContainer = document.querySelector('#cardContainer');

    const title = movie.Title || "title unknown";
    const poster = movie.Poster;
    

    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const moviePoster = document.createElement('img');
    moviePoster.classList.add('movie-poster');
    moviePoster.src = poster;
    moviePoster.alt = `Poster from the movie ${title}`;

    moviePoster.onerror = function(){
        this.src = './res/icons/missing-poster.svg'
    }

    
    addPosterClick(moviePoster, movie.imdbID);

    starFavoritesIcon();

    const favoritesBtn = document.createElement('button');
    favoritesBtn.classList.add('favorites-btn');
    favoritesBtn.type = 'button';
    favoritesBtn.setAttribute('aria-label', 'Add to Favorites');
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