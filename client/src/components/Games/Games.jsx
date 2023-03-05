import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllVideogames } from "../../redux/actions";
import { Link } from "react-router-dom";
import s from "./Games.module.css";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";

const Cards = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state) => state.allVideogames);
  const currentPage = useSelector((state) => state.currentPage);
  const videogamesPerPage = useSelector((state) => state.videogamesPerPage);
  const indexOfLastGame = currentPage * videogamesPerPage;
  const indexOfFirstGame = indexOfLastGame - videogamesPerPage;
  const currentGames = allVideogames.slice(indexOfFirstGame, indexOfLastGame);

  const [carga, setCarga] = useState(true);

  useEffect(() => {
    dispatch(getAllVideogames()).then(() => setCarga(false));
  }, [dispatch]);

  if (carga) {
    return <Loading />;
  }

  return (
    <>
      <div className={s.card__container}>
        {currentGames.length > 0 ? (
          currentGames.map((game) => {
            return (
              <div key={game.id} className={s.individual__card}>
                <Link to={`/videogames/${game.id}`}>
                  <img
                    className={s.game__img}
                    src={game.background_image}
                    alt="game"
                  />
                  <div className={s.game__name}>{game.name}</div>
                  <br></br>
                  <div className={s.game__genres}>
                    {game.genres?.map((g) => (g.name ? g.name : g)).join(" | ")}
                  </div>
                  <br></br>
                  <div className={s.game__rating}>
                    {game.rating}
                    <i class="fa-solid fa-star"></i>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div>
            {" "}
            <Error />{" "}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cards;
