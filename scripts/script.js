import { renderRandomTrailers } from "./modules/gu.js";
import { topMoviesCard } from "./modules/gu.js";
import { searchBtnFunc } from "./components/search.js";
import { renderSearchMovie } from "./components/search.js";
/* import { showFavoritesMovie } from "./components/favorites.js"; */
import { starFavorites } from "./components/favorites.js";
import { renderInfoMovie } from "./components/show-movie-info.js";

if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    renderRandomTrailers();
    topMoviesCard();
    searchBtnFunc();

    /* saveSearchValue(); */
    
} else if (window.location.pathname === '/favorites.html') {
    console.log('favorites.html');
   /*  showFavoritesMovie(); */
   starFavorites();


} else if (window.location.pathname === '/movie.html') {
    console.log('movie.html');
    renderInfoMovie();

} else if (window.location.pathname === '/search.html') {
    console.log('search.html');
    /* saveSearch(); */
    renderSearchMovie();
    /* favoritsBtnFunc(); */
}
