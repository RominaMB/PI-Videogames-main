import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllVideogames } from '../redux/actions';
import s from './Reset.module.css';

const Reset = ()=> {
    const dispatch = useDispatch();

    const handleReset=(e)=>{
        e.preventDefault()
        dispatch(getAllVideogames());
    }

    return(
        <div>
        <button className={s.reset__btn} onClick={handleReset}>Clear All Filters</button>
        </div>
    )
}
export default Reset;