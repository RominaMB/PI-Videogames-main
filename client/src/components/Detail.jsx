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
      
            <div><h2>Soy DETAIL del GAME {id}</h2>
            <div>{details.map(game=> {
                return(
                    <p> 
                        Name: {game.name}
                        Genres:{game.genres?.map(g=> (g.name ? g.name : g))};
                        Descripcion: {game.description}
                        Released: {game.released}
                        Rating: {game.rating}
                        Platforms: {game.platforms}
                        Image: {game.image}           
                    </p>
                )
            })}
            </div>
        </div>
        </>
    );
}

export default Detail;