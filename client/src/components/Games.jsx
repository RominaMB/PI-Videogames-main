import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import { getAllVideogames } from '../redux/actions';
import { Link } from 'react-router-dom';


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
            <h2>Soy CARDS CONTAINER </h2>
            <ul>
                {allVideogames.map(game=> {
                    return(
                        <>
                        <li key={game.id}>
                        <div><Link to= {`/videogames/${game.id}`}>
                        <div>{game.name}</div>
                        <div>{game.genres?.map(g=> (g.name ? g.name : g))}</div>
                        <div><img src={game.background_image} alt='game'/></div>
                        </Link></div>
                        </li>
                        </>
                        )
                        
                })}
            </ul>
        </>
    )
}

export default Cards;
