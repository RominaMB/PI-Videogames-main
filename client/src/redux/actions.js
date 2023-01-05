import axios from 'axios';
const URL_SERVER = 'http://localhost:3001'

// GET ACTIONS
export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';
export const GET_VIDEOGAMES_DETAILS = 'GET_VIDEOGAMES_DETAILS';
export const CLEAN_VIDEOGAMES_DETAILS = 'CLEAN_VIDEOGAMES_DETAILS';
export const GET_GENRES = 'GET_GENRES';

//Action Creator
export const getAllVideogames = ()=> async (dispatch) => {
    return await axios
        .get(`${URL_SERVER}/videogames`)
        .then((response)=> 
            dispatch({ type: GET_ALL_VIDEOGAMES, payload: response.data }))
};

export const getVideogamesDetails = (id)=> async (dispatch) => {
    return await axios
    .get(`${URL_SERVER}/videogames/${id}`)
    .then((response)=>
        dispatch( {type: GET_VIDEOGAMES_DETAILS, payload: response.data }))
}

export const cleanVgDetails = () => {
    return { type: 'CLEAN_VIDEOGAMES_DETAILS'}
}

export const getGenres = ()=> async (dispatch) => {
    return await axios
    .get(`${URL_SERVER}/genres`)
    .then((response)=>
        dispatch( {type: GET_GENRES, payload: response.data }))
}
