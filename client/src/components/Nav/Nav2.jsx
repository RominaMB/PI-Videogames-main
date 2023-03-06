import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchGame } from "../../redux/actions";
import s from "./Nav2.module.css";
import nav from "../../assets/nav3.png";

const NavHome = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(""); // mi estado local con valor inicial vacio

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 1) {
      dispatch(searchGame(name));
      setName("");
    } else {
      alert("You didnt write anything on search");
    }
  };

  return (
    <>
      <div className={s.nav__bar}>
        <div className={s.search__container}>
          <form className={s.search__bar} onSubmit={(e) => handleSubmit(e)}>
            <input
              className={s.input__searchbar}
              type="text"
              id="name"
              value={name}
              autoComplete="off"
              placeholder="Search a videogame"
              onChange={(e) => handleChange(e)}
            ></input>

            <button
              className={s.button__searchbar}
              type="submit"
              // disabled={!name}
            >
              Search
            </button>
          </form>
        </div>
        <Link to="/">
          <img className={s.nav__img} src={nav} alt="navlanding" />
        </Link>
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

export default NavHome;
