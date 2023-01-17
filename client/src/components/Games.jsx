import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import { getAllVideogames } from '../redux/actions';
import { Link } from 'react-router-dom';
import s from './Games.module.css';
import Loading from './Loading';

const Cards = ()=> {

    const dispatch = useDispatch();
    const allVideogames = useSelector((state)=> state.allVideogames);
    const currentPage = useSelector((state)=> state.currentPage);
    const videogamesPerPage = useSelector((state)=> state.videogamesPerPage)
    const indexOfLastGame = currentPage * videogamesPerPage;
    const indexOfFirstGame = indexOfLastGame - videogamesPerPage;
    const currentGames = allVideogames.slice(indexOfFirstGame, indexOfLastGame);
  
    useEffect(()=> {
        dispatch(getAllVideogames());

        return()=>{
            console.log('Componente Desmonte')
        }
    },[dispatch])

    return(
        <>
            <div className={s.card__container}>
            {currentGames.length === 0 && <Loading />}
                {currentGames.map((game)=> {
                    return(
                        <>
                        {/* <div className='individual__card' key={game.id}> */}
                        <div key={game.id} className={s.individual__card}>
                            <Link to= {`/videogames/${game.id}`}>
                            <img className={s.game__img} src={game.background_image} alt='game'/>
                            <div className={s.game__name}>{game.name}</div>
                            <br></br>
                            <div className={s.game__genres}>{game.genres?.map(g=> (g.name ? g.name : g)).join(" | ")}</div>
                            <br></br>
                            <div className={s.game__rating}>{game.rating}★</div>

                            </Link>  
                        </div>
                        {/* </div> */}
                        </>
                        )
                        
                })}
            </div>
        </>
    )
}

export default Cards;
