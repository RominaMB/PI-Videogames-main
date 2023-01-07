import React from 'react';
import s from './SearchBar.module.css';

const SearchBar = ()=> {
    return(
        <div className={s.search__container}>

            <form className={s.search__bar}>
            <input className= {s.input__searchbar} type='text' name='searchbar' onkeyup='search_videogame()' placeholder='Search a videogame'></input>
            <button className = {s.button__searchbar} type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;