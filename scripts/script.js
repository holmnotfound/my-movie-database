import { renderRandomTrailers } from "./components/renderRandomTrailers.js";

 import { topMoviesCard } from "./components/topMoviesCard.js";

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');
    renderRandomTrailers();
    topMoviesCard();

} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');

} else if(window.location.pathname === '/search.html') {
    console.log('search.html');

}
