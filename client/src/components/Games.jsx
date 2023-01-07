import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import { getAllVideogames } from '../redux/actions';
import { Link } from 'react-router-dom';
import s from './Games.module.css';

const Cards = ()=> {

    const dispatch = useDispatch();
    const allVideogames = useSelector((state)=> state.allVideogames);
    
    useEffect(()=> {
        dispatch(getAllVideogames());

        return()=>{
            console.log('Componente Desmonte')
        }
    },[dispatch])

    return(
        <>
            <div className={s.card__container}><h2>Soy CARDS CONTAINER </h2>
            
            <ul>
                {allVideogames.map(game=> {
                    return(
                        <>
                        {/* <div className='individual__card' key={game.id}> */}
                        <div className={s.individual__card}>
                            <Link to= {`/videogames/${game.id}`}>
                            <div className={s.game__name}>{game.name}</div>
                            <div className={s.game__genres}>{game.genres?.map(g=> (g.name ? g.name : g))}</div>
                            <div><img className={s.game__img} src={game.background_image} alt='game'/></div>
                            </Link>
                            
                        </div>
                        {/* </div> */}
                        </>
                        )
                        
                })}
            </ul>
            </div>
        </>
    )
}

export default Cards;
