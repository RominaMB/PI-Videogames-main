import axios from 'axios';
const URL_SERVER = 'http://localhost:3001'

// GET ACTIONS
export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';
export const GET_VIDEOGAMES_DETAILS = 'GET_VIDEOGAMES_DETAILS';
export const CLEAN_VIDEOGAMES_DETAILS = 'CLEAN_VIDEOGAMES_DETAILS';
export const GET_GENRES = 'GET_GENRES';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const SEARCH_GAMES_BY_NAME = 'SEARCH_GAMES_BY_NAME';
export const ORDER_BY = 'ORDER_BY';
export const FILTER_BY_SOURCE = 'FILTER_BY_SOURCE';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';


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
    return { type: CLEAN_VIDEOGAMES_DETAILS }
}

export const getGenres = ()=> async (dispatch) => {
    return await axios
    .get(`${URL_SERVER}/genres`)
    .then((response)=>
        dispatch( {type: GET_GENRES, payload: response.data }))
}

export const getPlatforms = ()=> async (dispatch) => {
    return await axios
    .get(`${URL_SERVER}/platforms`) // ver /platforms o /videogames/platforms
    .then((response)=>
        dispatch( {type: GET_PLATFORMS, payload: response.data }))
}

export const searchGame = (name)=> async (dispatch)=> {
    return await axios
    .get(`${URL_SERVER}/videogames?name=${name}`)
    .then((response)=>
        dispatch( {type: SEARCH_GAMES_BY_NAME, payload: response.data }))
}

export const orderBy = (payload)=> {
    return { type: ORDER_BY, payload }
}

export const filterBySource = (payload)=> {
    return { type: FILTER_BY_SOURCE, payload }
}

export const filterByGenre = (payload)=> {
    return { type: FILTER_BY_GENRE, payload }
}