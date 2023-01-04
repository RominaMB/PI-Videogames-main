import React from 'react';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react'; 
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllVideogames } from '../redux/actions';
// import { Link } from 'react-router-dom';

const Landing = ()=> {
    return(
        <div >
            <h1>Soy LANDING PAGE</h1>
            <Link to={'/videogames'}><button>START</button></Link>
        </div>
    )
}

export default Landing;

// Es de lo mas basico y sencillo de realizar 
// en cuanto a funcionalidad) 
//solo debes hacer un componente llamado Landing
//(o como quieras) en el cual pongas un h1 de titulo
// y un boton con LINK al “/home”.