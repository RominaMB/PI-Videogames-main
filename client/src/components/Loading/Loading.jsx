import React from 'react';
import Load2 from '../../assets/Load2.gif';
import s from './Loading.module.css';

export default function Loading(){
    return(
        
        <div className={s.loading__container}>
            <img className={s.loading} src={Load2} alt='loading' />
            <h1 className={s.loading__text}>Loading...</h1>
        </div>
    )
}