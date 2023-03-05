import React from "react";
import { Link } from "react-router-dom";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={s.footer__class}>
        GameLand | Made & designed with ♥ by{" "}
        <a className={s.footer__link} href={"https://github.com/RominaMB"}>
          RominaMB <i class="fa-brands fa-github"></i>
        </a>
        {/* <Link to="/about" className={s.link__style}>
          {" " + " About"}
        </Link> */}
      </div>
    </>
  );
};

export default Footer;
