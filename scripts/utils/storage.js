export function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function saveFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function saveSearchQuery(query) {
    localStorage.setItem("search", query)
}

export function getSearchQuery() {
    return localStorage.getItem("search") || "";
}

export function saveImdbID(imdbID) {

    localStorage.setItem('imdbID', imdbID);
}

export function getImdbID() {
    return localStorage.getItem("imdbID") || null;
}

export function saveMovies(movies){
    localStorage.setItem("movies", JSON.stringify(movies));
}

export function getMovies () {
    return JSON.parse(localStorage.getItem("movies")) || [];
}