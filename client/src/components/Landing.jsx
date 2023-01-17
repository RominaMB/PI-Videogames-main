import React from 'react';
import { Link } from 'react-router-dom';
import shadow from '../assets/shadow.png';
import press from '../assets/press.png';
import nav from '../assets/nav.png';
import s from './Landing.module.css';

const Landing = ()=> {
    return(

        <div className={s.landing__main}>
            
                <img className={s.landing__title} src={shadow} alt='title'/>
                <div className={s.button__container}>
                    {/* <p className={s.button__text}>Press to START</p> */}
                    <img className={s.button__text} src={press} alt='title'/>
                    <Link to={'/videogames'}>
                        <img className={s.nav__img}src={nav} alt='home'/>
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