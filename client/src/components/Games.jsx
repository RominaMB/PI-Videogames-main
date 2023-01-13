import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import { getAllVideogames } from '../redux/actions';
import { Link } from 'react-router-dom';
import s from './Games.module.css';

const Cards = ()=> {

    const dispatch = useDispatch();
    const allVideogames = useSelector((state)=> state.allVideogames);
    const currentPage = useSelector((state)=> state.currentPage);
    const videogamesPerPage = useSelector((state)=> state.videogamesPerPage)
    const indexOfLastGame = currentPage * videogamesPerPage;
    const indexOfFirstGame = indexOfLastGame - videogamesPerPage;
    const currentGames = allVideogames.slice(indexOfFirstGame, indexOfLastGame);

    // const [order, setOrder] = useState('')
    
    useEffect(()=> {
        dispatch(getAllVideogames());

        return()=>{
            console.log('Componente Desmonte')
        }
    },[dispatch])

    return(
        <>
            <div className={s.card__container}>
            
                {currentGames.map(game=> {
                    return(
                        <>
                        {/* <div className='individual__card' key={game.id}> */}
                        <div className={s.individual__card}>
                            <Link to= {`/videogames/${game.id}`}>
                            <div><img className={s.game__img} src={game.background_image} alt='game'/></div>
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
