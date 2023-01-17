import React from 'react';
import s from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchGame } from '../../redux/actions'

const SearchBar = ()=> {
    const dispatch = useDispatch();
    const [name, setName] = useState('') // mi estado local con valor inicial vacio

    const handleChange = (e)=> {
        setName(e.target.value);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(name.length > 1) {
            dispatch(searchGame(name))
            setName('')
        } else {
            alert('Didnt write anything on search')
        }
    }

    return(
        <div className={s.search__container}>

            <form 
            className={s.search__bar} 
            onSubmit={e => handleSubmit(e)}
            >
            <input 
            className= {s.input__searchbar} 
            type='text' 
            id = 'name'
            value={name}
            autoComplete='off'
            placeholder='Search a videogame'
            onChange={e => handleChange(e)}
            ></input>

            <button className = {s.button__searchbar}
             type='submit'
             disabled={!name}
             
             >Search</button>
            </form>
        </div>
    )
}

export default SearchBar;