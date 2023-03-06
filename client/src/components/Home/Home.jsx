import React from "react";
import NavHome from "../Nav/Nav2";
import Games from "../Games/Games";
import OrdersFilters from "../OrdersFilters/OrdersFilters";
import Paginated from "../Paginated/Paginated";
import Footer from "../Footer/Footer";

import s from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={s.background_img}>
        <NavHome />
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
