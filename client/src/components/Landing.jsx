import React from 'react';
import { Link } from 'react-router-dom';
import s from './Landing.module.css';

// import { useEffect } from 'react'; 
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllVideogames } from '../redux/actions';
// import { Link } from 'react-router-dom';

const Landing = ()=> {
    return(

        <div className={s.landing__main}>
            
                <h1 className={s.landing__title}>Welcome to Videogames</h1>
                <div className={s.button__container}>
                    <p className={s.button__text}>Press X to START.</p>
                    <Link to={'/videogames'}>
                        <button className={s.button__start}>START</button>
                    </Link>
                </div>
            
        </div>
    );
};

export default Landing;

// Es de lo mas basico y sencillo de realizar 
// en cuanto a funcionalidad) 
//solo debes hacer un componente llamado Landing
//(o como quieras) en el cual pongas un h1 de titulo
// y un boton con LINK al “/home”.