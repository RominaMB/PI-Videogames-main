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
            <br></br>       
            <Games/>
            <Paginated/>
        </>
    )
}

export default Home;