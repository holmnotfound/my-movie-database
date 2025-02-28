import { fetchSpecMovieLibrary } from "./api.js";
import { starFavoritesIcon } from "./favorites.js";
import { movieCardDetails } from "../components/movieCardDetails.js";
import { saveImdbID } from "../utils/storage.js";

export function addPosterClick(moviePoster, imdbID) {
    moviePoster.addEventListener('click', () => goToMoviePage(imdbID));
}

function goToMoviePage(imdbID) {
    saveImdbID(imdbID);
    window.location.href = 'movie.html';
}

export async function renderInfoMovie() {
    const movieInfo = await fetchSpecMovieLibrary();
    movieCardDetails(movieInfo);
    starFavoritesIcon();
}


