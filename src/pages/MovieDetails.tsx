import { useEffect, useState } from "react";
import {useParams} from  "react-router-dom";
import { getMovieById } from "../services/api";

export default function MovieDetails() {
    const {id} = useParams();
    const [movie , setMovies] = useState(null);

    useEffect(() =>{
        getMovieById(id).then(data => {
            setMovies(data);
        });
    }, []);

    return(
        <div>
            <h1>{movie?.originalTitle}</h1>
            <img src={movie?.primaryImage?.url} alt="" />
            <p>{movie?.plot}</p>
        </div>
    );
}