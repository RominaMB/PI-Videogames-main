import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'; 
import { getAllVideogames } from '../redux/actions';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import SearchBar from './SearchBar';


const Home = ()=> {

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
            <Nav/>
            <SearchBar/>
            <h2>Soy HOME PAGE</h2>
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

export default Home;
