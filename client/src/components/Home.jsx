import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';
import Games from './Games'

const Home = ()=> {
    return(
        <>
            <Nav/>
            <SearchBar/>
            <h2>Soy HOME PAGE</h2>
            <Games/>
        </>
    )
}

export default Home;