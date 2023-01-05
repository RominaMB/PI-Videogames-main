import React from 'react';

const SearchBar = ()=> {
    return(
        <>
            
            <h2>Soy SearchBar</h2>
            <input type='text' name='searchbar' onkeyup="search_videogame()" placeholder='Buscar Videogame...'></input>
        </>
    )
}

export default SearchBar;