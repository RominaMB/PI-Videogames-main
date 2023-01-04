import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ()=> {
    return(
        <>
            <h2>Soy NAV</h2>
            <p><Link to='/videogames'>HOME</Link></p>
            <p><Link to='/about'>ABOUT</Link></p>
            <p><Link to='/create'>CREATE</Link></p>

        </>
    )
}

export default Nav;