import React from "react";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import Games from "../Games/Games";
import Reset from "../Reset/Reset";
import OrdersFilters from "../OrdersFilters/OrdersFilters";
import Paginated from "../Paginated/Paginated";
import Footer from "../Footer/Footer";

import s from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={s.background_img}>
        <SearchBar />
        <Nav />
        <Reset />
        <OrdersFilters />
        <br></br>
        <Games />
        <Paginated />
        <Footer />
      </div>
    </>
  );
};

export default Home;
