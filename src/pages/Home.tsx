import { useEffect, useState } from 'react';
import { boardMovies, searchMovies } from '../services/api';
import SearchBar from '../components/SearchBar';
import Movieslist from '../components/MoviesList';

    export default function Home() {
        const [movies, setMovies] = useState([]);

        useEffect (() =>{
            boardMovies().then(data => {
                setMovies(data.titles);
            });
        }, []);

        const handleSearch = (query) => {
            searchMovies(query).then(data => {
                setMovies(data.titles);
            });
        };

       

        return (
            <div>
                <SearchBar onSearch={handleSearch}/>
                <Movieslist  movies={movies} />
            </div>
        );
    }