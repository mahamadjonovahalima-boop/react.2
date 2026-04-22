import { Link } from "react-router-dom";
import { addToFavorites, getFavorites, removeFromFavorites } from "../services/favorites";
import { useState } from "react";

export default function MovieCard() {
    const [favorites , setFavorites] = useState(getFavorites())
    const handleFavorites = (id: string ) => {
        if (favorites.includes(id)) {
            removeFromFavorites(id);
            setFavorites(getFavorites());
        } else {
            addToFavorites(id);
            setFavorites(getFavorites()); 
        }
    }

    return ( <div className='p-2'>
        <img src={movie?.primaryImage?.url} alt='НАЗВАНИЕ' />
        <Link to={`/movie/${movie.id}`}>
            <h3>{movie.originalTitle}</h3>
        </Link>
        {favorites(). includes(movie.id) ? (
            <button onClick={() => handleFavorites(movie.id)} className='p-3 bg-red-900 text-white'>Удфлить из избранное</button>
        ) : (  
            <button onClick={() => handleFavorites(movie.id)} className='p-3 bg-red-500 text-white'>Добавить в избранное</button>
        )} 
    </div>)
}