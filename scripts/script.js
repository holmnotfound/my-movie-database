import { renderRandomTrailers } from "./modules/gu.js";
import { topMoviesCard } from "./modules/gu.js";
import { searchBtnFunc } from "./components/search.js";
/* import { searchPage } from "./components/search.js"; */
/* import { getMovieArray } from "./components/search.js";
 *//* import { saveSearchValue } from "./components/search.js";
 *//* import { saveSearchValue} from "./components/search.js"; */
/* import { fetchMovieLibrary } from "./modules/api.js"; */
import { renderSearchMovie } from "./components/search.js";
/* import { saveSearch } from "./components/search.js";
 */

if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    renderRandomTrailers();
    topMoviesCard();
    searchBtnFunc();
    /* saveSearchValue(); */
    
} else if (window.location.pathname === '/favorites.html') {
    console.log('favorites.html');

} else if (window.location.pathname === '/movie.html') {
    console.log('movie.html');

} else if (window.location.pathname === '/search.html') {
    console.log('search.html');
    /* saveSearch(); */
    renderSearchMovie();
}
