


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

export async function fetchMovieLibrary(){
    try{
        /* let searchInput = document.querySelector('#searchInput');
        let search = searchInput.value; */
        let search = localStorage.getItem('search')
        console.log(search)
        if(search === ''){
            throw new Error ('ingen sträng i localstorage')
        }
        console.log('APIANROP:')
        const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=64cc94db`);
        if(!response.ok){
            throw new Error('Network response was no ok');
        }
        let movieSearch = await response.json();
        console.log(search)
        console.log(movieSearch)
        return movieSearch
    } catch (error){
        console.log(error.message);
    }
}