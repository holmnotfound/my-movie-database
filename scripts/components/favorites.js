

/* export function favoritsBtnFunc (){
    

    let favoriteBtn = document.querySelector('.favorites-btn')

    favoriteBtn.addEventListener('click', () => {
    if(this.classList.contains('fa-solid')){
        console.log('knappen aktiv')
    }
    })

    
}

let local = JSON.parse(localStorage.getItem('movies'));
    let localSearchID = local.Search[0].imdbID;
    console.log('render:', localSearchID) */


import { movieCard } from "./movieCard.js";

export async function showFavoritesMovie(){
    const favoriteContainer = document.querySelector('.card-container');
    const favortiesList = JSON.parse(localStorage.getItem('favorites'));
    console.log(favortiesList)
    
    favortiesList.forEach(movie => {
        movieCard(movie, favoriteContainer);
    });

}

export function starFavorites() {
    showFavoritesMovie().then(() => {
        const starIcons = document.querySelectorAll('.favorites-btn i'); 
        const favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];

        starIcons.forEach(icon => {
            const movieData = JSON.parse(icon.parentElement.getAttribute('data-movie'));
            const isFavorite = favoritesList.some(fav => fav.Title === movieData.Title);
            
            if (isFavorite) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }
        });
    });
}

export function starFavoritesIcon(){
    const starIcons = document.querySelectorAll('.favorites-btn i');
    const starIconsInfo = document.querySelectorAll('.favorites-info-btn i')
    const favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];

    starIcons.forEach(icon => {
        const button = icon.closest('.favorites-btn');
        const movieData = JSON.parse(button.getAttribute('data-movie'));

        // Kontrollera om filmen finns i favoriter
        const exists = favoritesList.some(movie => movie.imdbID === movieData.imdbID);

        if (exists) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    });

    starIconsInfo.forEach(icon => {
        const button = icon.closest('.favorites-info-btn');
        const movieData = JSON.parse(button.getAttribute('data-movie'));

        // Kontrollera om filmen finns i favoriter
        const exists = favoritesList.some(movie => movie.imdbID === movieData.imdbID);

        if (exists) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    });
}

/* starIcons.forEach(icon => {
            const isFavorite = favoritesList.some(fav => fav.Title === movieData.Title);
            
            if (isFavorite) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }
        }); */
/* export function starFavorites() {
    showFavoritesMovie().then(() => {
        setTimeout(() => {
            const starIcons = document.querySelectorAll('.favorites-btn i'); 
            const favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];

            starIcons.forEach(icon => {
                const movieData = JSON.parse(icon.parentElement.getAttribute('data-movie'));
                const isFavorite = favoritesList.some(fav => fav.Title === movieData.Title);
                
                if (isFavorite) {
                    icon.classList.remove('fa-regular'); // Ta bort regular
                    icon.classList.add('fa-solid'); // Lägg till solid
                }
            });
        }, 100);
    });
} */

/* function solidStar(){
    const favoriteContainer = document.querySelector('.card-container');
    
    console.log(favoriteContainer)
    if(favoriteContainer.classList.contains('card-container')){
        let starIcon = document.querySelector('.fa-regular fa-star')
        starIcon.classList.add('fa-solid', 'fa-star');
        starIcon.classList.remove('fa-regular')
        console.log('solid')
    } else{
        console.log('regular')
    }
} */

/* export function showFavoritesMovie() {
    const favoriteContainer = document.querySelector('.card-container');
    const favortiesList = JSON.parse(localStorage.getItem('favorites'));

    favortiesList.forEach(movie => {
        const starIcon = document.createElement('i');
        starIcon.classList.remove('fa-regular');
        starIcon.classList.add('fa-solid');
        movieCard(movie, favoriteContainer,starIcon);
    });
} */

/* const favoritesList = JSON.parse(localStorage.getItem('favorites'));
    if(favoritesList.includes(movie.Title)){
        starIcon.classList.add('fa-solid', 'fa-star');
        starIcon.classList.remove('fa-regular')
    } else{
        starIcon.classList.add('fa-regular', 'fa-star');
        starIcon.classList.remove('fa-solid')
    } */

    /* favortiesList.forEach(Element => {
        
            const starIcon = document.createElement('i');
            
            starIcon.classList.add('fa-star');
        
    }); */
    /* if(favoriteContainer.classList.contains('.favorite-btn')){
        
        
        console.log('solid')
    } else{
        console.log('regular')
    } */

    /* console.log(starIcon.classList) */


    /* favortiesList.forEach(movie => movieCard(movie, favoriteContainer));
    starIcon.classList.remove('fa-regular')
    starIcon.classList.add('fa-solid') */