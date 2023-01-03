import axios from 'axios';

export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';

//Action Creator
export const getAllVideogames = ()=> async (dispatch) => {
    return await axios
        .get('http://localhost:3001/videogames')
        .then((response)=> 
            dispatch({ type: GET_ALL_VIDEOGAMES, payload: response.data }))
};