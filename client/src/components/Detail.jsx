import React from 'react';
import { useParams } from 'react-router-dom';
//import { useEffect } from 'react'; 
//import { useDispatch, useSelector } from 'react-redux';


const Detail = ()=> {

    const {id} = useParams();
    console.log(id);

    //useEffect(()=> {
        //se encargue de hacer dispatch de la action que pida el detalle del personaje de la API
        //cuando se desmonta el componente, despacho una action que limpie ese estado 'detail' (asi no veo el detail del game anterior)
    //},[dispatch])

    return(
        <>
            <h2>Soy DETAIL del GAME {id}</h2>
        </>
    )
}

export default Detail;