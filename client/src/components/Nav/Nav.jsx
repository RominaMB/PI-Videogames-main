import React from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from '../components/SearchBar';
import s from './Nav.module.css';
import nav from '../../assets/nav.png';

const Nav = ()=> {
    return(
        <>
            <div className={s.nav__bar}>

                {/* <div className={s.nav__title}> */}
                    <Link to='/'><img className ={s.nav__img} src={nav} alt='navlanding'/></Link>
                {/* </div> */}
                {/* <div className={s.nav__search}><SearchBar/></div> */}
                <div className={s.nav__alllinks}>
                    <Link to='/videogames' className={s.nav__link}>HOME</Link>
                    <Link to='/create' className={s.nav__link}>CREATE</Link>
                    <Link to='/about' className={s.nav__link}>ABOUT</Link>
                </div>
            </div>
        </>
    )
}

export default Nav;