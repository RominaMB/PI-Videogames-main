import React from 'react';
import Nav from './Nav';
import Games from './Games'
import Filters from './Filters';

const Home = ()=> {
    return(
        <>
            <Nav/> 
            <Filters/>        
            <h2>Soy HOME PAGE</h2>
            <Games/>
        </>
    )
}

export default Home;