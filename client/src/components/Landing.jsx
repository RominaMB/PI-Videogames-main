import React from 'react';
import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from '../redux/actions';
import { Link } from 'react-router-dom';

const Landing = ()=> {

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
            <h2>Soy LANDING PAGE</h2>
            <ul>
                {allVideogames.map(game=> {
                    return(
                        <li key={game.id}>
                            <Link to= {`/videogames/${game.id}`}>{game.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Landing;
// Es de lo mas basico y sencillo de realizar 
// en cuanto a funcionalidad) 
//solo debes hacer un componente llamado Landing
//(o como quieras) en el cual pongas un h1 de titulo
// y un boton con LINK al “/home”.