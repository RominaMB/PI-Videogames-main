import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { getVideogamesDetails, cleanVgDetails } from '../redux/actions';
import Nav from './Nav';


const Detail = ()=> {

    const { id } = useParams();
    const dispatch = useDispatch();
    //const { name, genres, description, released, rating, platforms, background_image } = details;
    const details = useSelector((state)=> state.details);

    
    useEffect(()=> {
        dispatch(getVideogamesDetails(id)); //se encarga de hacer dispatch de la action que pida el detalle del personaje de la API

        return()=>{
        dispatch(cleanVgDetails()); //cuando se desmonta el componente, despacho una action que limpie 
        }                           //ese estado 'detail' (asi no veo el detail del game anterior)
    },[dispatch, id]);

    return(
        <>
            <Nav/>
            <body>
            <div><h2>Soy DETAIL del GAME {id}</h2>
            {details.map(game=> {
                return(
                    <>
                    <div>
                    <label for= 'name'>Name:</label>
                    {game.name}
                    </div>

                    <br></br>
                    <div><img src={game.background_image} alt='game'/></div>

                    <br></br>
                    <div><label for='genres'>Genres:</label>
                    {game.genres?.map(g=> (g.name ? g.name : g))};
                    </div>

                    <br></br>
                    <div><label for='rating'>Rating:</label>
                    {game.rating}</div>
                    <br></br>
                    <div><label for='description'>Description:</label>
                    {game.description}</div>

                    <br></br>
                    <div><label for='released'>Released:</label>
                    {game.released}</div>

                    <br></br>
                    <div><label for='platforms'>Platforms:</label>{game.platforms}</div>
                    </>    
                )
                
            })}
            </div>
            </body>
        </>
    );
}

export default Detail;