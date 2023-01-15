import React from 'react';
import Nav from './Nav';
import Games from './Games'
import OrdersFilters from './OrdersFilters';
import Paginated from './Paginated';
import s from './Home.module.css';

const Home = ()=> {
    return(
        <>
            <div className={s.background_img}>
            <Nav/>
            <OrdersFilters/>
            <br></br>       
            <Games/>
            <Paginated/>
            </div>
        </>
    )
}

export default Home;