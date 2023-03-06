import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getVideogamesDetails, cleanVgDetails } from "../../redux/actions";
import s from "./Detail.module.css";
import Nav from "../Nav/Nav";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch(); // para usar las actions
  const details = useSelector((state) => state.details); // para usar el estado
  var regexp = /(<([^>]+)>)/gi;

  useEffect(() => {
    dispatch(getVideogamesDetails(id)); //se encarga de hacer dispatch de la action que pida el detalle del personaje de la API
    return () => {
      dispatch(cleanVgDetails()); //cuando se desmonta el componente, despacho una action que limpie
    }; //ese estado 'detail' (asi no veo el detail del game anterior)
  }, [dispatch, id]);

  return (
    <>
      <Nav />
      <div className={s.detail__page}>
        {details.length === 0 && <Loading />}
        {details.map((game, id) => {
          return (
            <div key={game.id} className={s.detail__container}>
              <Link to="/videogames">
                <button className={s.back__btn}>
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
              </Link>
              <h2 className={s.detail__name}>{game.name}</h2>
              <hr></hr>
              {/* <br></br> */}
              <div>
                <img
                  className={s.detail__img}
                  src={game.background_image}
                  alt="game"
                />
              </div>

              <br></br>
              <div className={s.detail__label}>
                <label htmlFor="genres">Genres:</label>
              </div>
              <div className={s.all__detail}>
                {game.genres?.map((g) => (g.name ? g.name : g)).join(" | ")}{" "}
              </div>

              <div className={s.detail__label}>
                <label htmlFor="rating">Rating:</label>
              </div>
              <div className={s.all__detail}>{game.rating + " / 5"}</div>

              <div className={s.detail__label}>
                <label htmlFor="description">Description:</label>
              </div>
              <p className={s.description}>
                {game.description
                  .replaceAll(regexp, " ")
                  .replaceAll("&#39", "")
                  .replaceAll("game;s", "games")
                  .replaceAll(";s", "'s") || "Not Specified"}
              </p>

              <div className={s.detail__label}>
                <label htmlFor="released">Released:</label>
              </div>
              <div className={s.all__detail}>
                {game.released.split("-").reverse().join("/")}
              </div>

              <div className={s.detail__label}>
                <label htmlFor="platforms">Platforms:</label>
              </div>
              <div className={s.all__detail}>{game.platforms.join(" , ")}</div>
            </div>
          );
        })}
        <Footer />
      </div>
    </>
  );
};

export default Detail;
