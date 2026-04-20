    import { useEffect, useState } from 'react';
    import { boardMovies, searchMovies } from '../services/api';

    export default function Home() {
        const [query, setQuery] = useState('');
        const [movies, setMovies] = useState([]);

        useEffect (() =>{
            boardMovies().then(data => {
                setMovies(data.titles);
            });
        }, []);

        const handleSearch = () => {
            searchMovies(query).then(data => {
                setMovies(data.titles);
            });
        };

        return (
            <div>
                <input
                    type='text'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
                <div className='grid grid-cols-4 gap-2'>
                    {movies.map(movie => (
                        <div className='p-2'>
                            <img src={movie?.primaryImage?.url} alt='НАЗВАНИЕ' />
                            <h3>{movie.originalTitle}</h3>
                        </div>
                    ))}
                </div>
            </div>
        );
    }