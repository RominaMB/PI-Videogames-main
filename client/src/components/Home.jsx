import React from 'react';
import Nav from './Nav';
import Games from './Games'
import OrderFilters from './OrdersFilters';

const Home = ()=> {
    return(
        <>
            <Nav/> 
            <OrderFilters/>        
            <h2>Soy HOME PAGE</h2>
            <Games/>
        </>
    )
}

export default Home;