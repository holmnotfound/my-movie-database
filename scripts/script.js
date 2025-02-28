import { renderRandomTrailers } from "./modules/renderTrailers.js";
import { topMoviesCard } from "./modules/renderTopMovies.js";
import { searchBtnFunc, renderSearchMovie } from "./components/search.js";
import { starFavorites, starFavoritesIcon } from "./modules/favorites.js";
import { renderInfoMovie } from "./modules/movieDetails.js";

if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    renderRandomTrailers();
    topMoviesCard();
    searchBtnFunc();
    starFavoritesIcon();
    
} else if (window.location.pathname === '/favorites.html') {
    console.log('favorites.html');
    starFavorites()
    searchBtnFunc();

} else if (window.location.pathname === '/movie.html') {
    console.log('movie.html');
    searchBtnFunc();
    renderInfoMovie();
    starFavoritesIcon();

} else if (window.location.pathname === '/search.html') {
    console.log('search.html');
    searchBtnFunc();
    renderSearchMovie();
}
