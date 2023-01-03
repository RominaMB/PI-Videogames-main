import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props)=> {
    return(
        <>
            <h2>Soy NAV</h2>
            <p><Link to='/'>HOME</Link></p>
            <p><Link to='/about'>ABOUT</Link></p>
            <p><Link to='/form'>FORM</Link></p>

        </>
    )
}

export default Nav;