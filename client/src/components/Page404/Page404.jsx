import React from "react";
import { Link } from "react-router-dom";
import gameover from "../../assets/404.png";
import s from "./Page404.module.css";

export default function NotFound({ location }) {
  return (
    <div>
      <div className={s.errorpage__container}>
        <img className={s.errorpage__img} src={gameover} alt="PageError" />
        <h2 className={s.errorpage__title}>
          Sorry, the page you are looking for does not exist ☹{" "}
        </h2>
        <h3 className={s.errorpage__details}>
          The requested URL{" "}
          <code className={s.location__path}>{location.pathname}</code> was not
          found on this server.
        </h3>
        <Link to="/videogames" className={s.nav__link}>
          <i class="fa-solid fa-house"></i> BACK HOME
        </Link>
      </div>
    </div>
  );
}
