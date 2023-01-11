import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { getVideogamesDetails, cleanVgDetails } from '../redux/actions';
import s from './Detail.module.css';
import Nav from './Nav';


const Detail = ()=> {

    const { id } = useParams();
    const dispatch = useDispatch();
    //const { name, genres, description, released, rating, platforms, background_image } = details;
    const details = useSelector((state)=> state.details);

    
    useEffect(()=> {
        dispatch(getVideogamesDetails(id)); //se encarga de hacer dispatch de la action que pida el detalle del personaje de la API
        console.log(id)
        return()=>{
        dispatch(cleanVgDetails()); //cuando se desmonta el componente, despacho una action que limpie 
        }                           //ese estado 'detail' (asi no veo el detail del game anterior)
    },[dispatch, id]);

    return(
        <>
            <Nav/>
            <body>
            <div className={s.detail__page}> <h2>Soy DETAIL del GAME {id}</h2>
            
            {details.map(game=> {
                return(
                    <div className={s.detail__container}>
                    <div className={s.detail__name}>
                    {game.name}
                    </div>

                    <br></br>
                    <div><img className={s.detail__img} src={game.background_image} alt='game'/></div>

                    <br></br>
                    <div className={s.detail__label}><label for='genres'>Genres:</label></div>
                    {game.genres?.map(g=> (g.name ? g.name : g))};
                    
                    <br></br>
                    <div className={s.detail__label}><label for='rating'>Rating:</label></div>
                    {game.rating}
                    <br></br>

                    <div className={s.detail__label}><label for='description'>Description:</label></div>
                    <div className={s.description}>{game.description}</div>

                    <br></br>
                    <div className={s.detail__label}><label for='released'>Released:</label></div>
                    {game.released}

                    <br></br>
                    <div className={s.detail__label}><label for='platforms'>Platforms:</label></div>
                    {game.platforms}
                    </div>    
                )
                
            })}
            </div>
            </body>
        </>
    );
}

export default Detail;