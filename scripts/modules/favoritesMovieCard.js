import { getFavorites } from "../utils/storage.js";
import { movieCard } from "../components/movieCard.js";

export async function showFavoritesMovie(){
    const favoriteContainer = document.querySelector('.card-container');
    const favortiesList = getFavorites(); 
    
    favortiesList.forEach(movie => {
        movieCard(movie, favoriteContainer);
    });

}