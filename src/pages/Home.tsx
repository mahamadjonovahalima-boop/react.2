import { useState } from "react";
import { searchMovies } from "../services/api";

export default function Home(){
    const [query , setQuery] = useState('');

    const handleSearch = () =>{
        searchMovies(query) .then(data => {
            console.log({data});
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
        </div>
    )
}