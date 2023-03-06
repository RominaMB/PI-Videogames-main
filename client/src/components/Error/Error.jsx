import React from "react";
import notfound from "../../assets/notfound.png";
import s from "./Error.module.css";

export default function Error() {
  return (
    <div className={s.error__container}>
      <h1 className={s.error__title}>Sorry, not videogames were found.</h1>
      <img className={s.error__img} src={notfound} alt="notfound" />
    </div>
  );
}
