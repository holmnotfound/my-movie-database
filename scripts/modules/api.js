import { getSearchQuery, getImdbID } from "../utils/storage.js";

export async function fetchTopMovies() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let movies = await response.json();
        return movies;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

export async function fetchMovieLibrary() {
    try {
        let search = getSearchQuery();
        if (search === '') {
            throw new Error('ingen sträng i localstorage')
        }
        const response = await fetch(`https://www.omdbapi.com/?s=${search}*&apikey=64cc94db`);
        if (!response.ok) {
            throw new Error('Network response was no ok');
        }
        let movieSearch = await response.json();
        return movieSearch
    } catch (error) {
        console.log(error.message);
    }
}

export async function fetchSpecMovieLibrary() {
    try {
        let imdbID = getImdbID();

        if (!imdbID) {
            throw new Error('Ingen imdbID i localStorage');
        }

        const response = await fetch(`https://www.omdbapi.com/?apikey=64cc94db&plot=full&i=${imdbID}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        let movieData = await response.json();
        return movieData;

    } catch (error) {
        console.log(error.message);
    }
}
