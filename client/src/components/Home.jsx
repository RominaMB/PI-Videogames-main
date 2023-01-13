import React from 'react';
import Nav from './Nav';
import Games from './Games'
import OrderFilters from './OrdersFilters';
import Paginated from './Paginated';

const Home = ()=> {
    return(
        <>
            <Nav/> 
            <OrderFilters/>        
            <h2>Soy HOME PAGE</h2>
            <Games/>
            <Paginated/>
        </>
    )
}

export default Home;