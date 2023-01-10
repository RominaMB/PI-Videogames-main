import React from 'react';
import Nav from './Nav';
import Games from './Games'
import Sort from './Sort';

const Home = ()=> {
    return(
        <>
            <Nav/> 
            <Sort/>        
            <h2>Soy HOME PAGE</h2>
            <Games/>
        </>
    )
}

export default Home;