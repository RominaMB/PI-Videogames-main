import React from 'react';
import loading2 from '../assets/loading2.gif';
import s from './Loading.module.css';

export default function Loading(){
    return(
        <div className={s.loading}>
            <img src={loading2} alt='loading' />
            <h1 className='loading__text'>Loading...</h1>
        </div>
    )
}