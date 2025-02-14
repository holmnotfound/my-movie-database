
/* export async function fetchTopMovies(){
    const   response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
    let movies = await response.json();
    
    return movies
} */

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