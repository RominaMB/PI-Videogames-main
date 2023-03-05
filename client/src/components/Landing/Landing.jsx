import React from "react";
import { Link } from "react-router-dom";
import shadow from "../../assets/shadow1.png";
import press from "../../assets/press.png";
import nav from "../../assets/nav2.png";
import s from "./Landing.module.css";
import Footer from "../Footer/Footer";

const Landing = () => {
  return (
    <div className={s.landing__main}>
      <img className={s.landing__title} src={shadow} alt="title" />
      <div className={s.button__container}>
        {/* <p className={s.button__text}>Press to START</p> */}
        {/* <img className={s.button__text} src={press} alt="title" /> */}
        <Link to={"/videogames"}>
          <img className={s.nav__img} src={nav} alt="home" />
        </Link>
      </div>
      <div className={s.footer__landing}>
        GameLand | Made & designed with ♥ by{" "}
        <a className={s.footer__link} href={"https://github.com/RominaMB"}>
          RominaMB <i class="fa-brands fa-github"></i>
        </a>
        {/* <Link to="/about" className={s.link__style}>
          {" " + " About"}
        </Link> */}
      </div>
    </div>
  );
};

export default Landing;
