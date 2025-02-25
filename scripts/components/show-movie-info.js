import { fetchSpecMovieLibrary } from "../modules/api.js";
import { starFavoritesIcon } from "./favorites.js";


export function addPosterClick(moviePoster, imdbID) {
    moviePoster.addEventListener('click', () => goToMoviePage(imdbID));
}

function goToMoviePage(imdbID) {

    saveImdbID(imdbID);
    window.location.href = 'movie.html';
}

async function saveImdbID(imdbID) {

    localStorage.setItem('imdbID', imdbID);
}

export async function renderInfoMovie() {
    let movieID = JSON.stringify(localStorage.getItem('imdbID'))
    console.log(movieID)

    const movieInfo = await fetchSpecMovieLibrary();
    console.log(movieInfo)

    movieCardDetails(movieInfo);
    starFavoritesIcon();
    
}

import { toggleFavorite } from "../modules/eventHandler.js";

function movieCardDetails(movieInfo) {
    const movieInfoContainer = document.querySelector('#movieInformation');

    const title = movieInfo.Title || "Okänd title"
    const poster = movieInfo.Poster || 'Ingen Poster';
    const plot = movieInfo.Plot || "Finns ingen plot"
    const year = movieInfo.Year || 'no information'
    const runtime = movieInfo.Runtime || 'no information'
    const genre = movieInfo.Genre || 'no information'
    const actors = movieInfo.Acttor || 'no information';
    const director = movieInfo.Directior || 'no information'
    const writers = movieInfo.Writer || 'no information'

    const movieInfoCard = document.createElement('div');
    movieInfoCard.classList.add('movie-info-card')

    const innerMovieInfoCard = document.createElement('div');
    innerMovieInfoCard.classList.add('inner-movie-info-card');

    const titleStar = document.createElement('div');
    titleStar.classList.add('title-and-star');

    const movieInfoDetails = document.createElement('div');
    movieInfoDetails.classList.add('movie-info-details');

    const movieInfoPeople = document.createElement('div');
    movieInfoPeople.classList.add('movie-info-people');

    const moviePoster = document.createElement('img');
    moviePoster.classList.add('movie-info-poster');
    moviePoster.src = poster;
    moviePoster.alt = title;

    const favoritesBtn = document.createElement('button');
    favoritesBtn.classList.add('favorites-info-btn');
    favoritesBtn.setAttribute('data-movie', JSON.stringify(movieInfo));
    starFavoritesIcon()

    const starIcon = document.createElement('i');
    starIcon.classList.add('fa-regular', 'fa-star')

    const movieTitle = document.createElement('h1');
    movieTitle.classList.add('movie-info-title');
    movieTitle.textContent = title;

    const moviePlot = document.createElement('p');
    moviePlot.classList.add('movie-info-plot');
    moviePlot.textContent = plot;

    const movieGenre = document.createElement('p');
    movieGenre.classList.add('movie-info-genre');
    movieGenre.textContent = genre;

    const movieYear = document.createElement('p');
    movieYear.classList.add('movie-info-year');
    movieYear.textContent = year;

    const movieRuntime = document.createElement('p');
    movieRuntime.classList.add('movie-info-runtime');
    movieRuntime.textContent = runtime;

    const movieActors = document.createElement('p');
    movieActors.classList.add('movie-info-actors');
    movieActors.textContent = actors;

    const movieDirector = document.createElement('p');
    movieDirector.classList.add('movie-info-director');
    movieDirector.textContent = director;

    const movieWriters = document.createElement('p');
    movieWriters.classList.add('movie-info-writers');
    movieWriters.textContent = writers;

    favoritesBtn.append(starIcon)
    movieInfoCard.append(moviePoster);
    titleStar.append(movieTitle, favoritesBtn)
    innerMovieInfoCard.append(titleStar, movieInfoDetails, moviePlot, movieInfoPeople)
    movieInfoDetails.append(movieGenre, movieRuntime, movieYear)
    movieInfoPeople.append(movieDirector, movieWriters, movieActors)
    movieInfoContainer.append(movieInfoCard, innerMovieInfoCard);

    /* movieInfoCard.append(moviePoster,favoritesBtn, movieTitle); */

    favoritesBtn.addEventListener('click', toggleFavorite);


}

