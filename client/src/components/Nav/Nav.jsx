import React from "react";
import { Link } from "react-router-dom";
// import SearchBar from '../components/SearchBar';
import s from "./Nav.module.css";
import nav from "../../assets/nav3.png";

const Nav = () => {
  return (
    <>
      <div className={s.nav__bar}>
        {/* <div className={s.nav__title}> */}
        <Link to="/">
          <img className={s.nav__img} src={nav} alt="navlanding" />
        </Link>
        {/* </div> */}
        {/* <div className={s.nav__search}><SearchBar/></div> */}
        <div className={s.nav__alllinks}>
          <Link to="/videogames" className={s.nav__link}>
            <i class="fa-solid fa-house"></i> HOME
          </Link>
          <Link to="/create" className={s.nav__link}>
            <i class="fa-sharp fa-solid fa-puzzle-piece"></i> CREATE
          </Link>
          <Link to="/about" className={s.nav__link}>
            <i class="fa-solid fa-user"></i> ABOUT
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
