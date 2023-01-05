import { CLEAN_VIDEOGAMES_DETAILS, GET_ALL_VIDEOGAMES, GET_VIDEOGAMES_DETAILS, GET_GENRES, GET_PLATFORMS } from './actions';

//Punto de partida cuando comience la aplicacion
const initialState = { 
    allVideogames: [],
    details: [], // {} Es un objeto porque tiene la informacion de un solo personaje
    genres: [],
    platforms: [],
};

const rootReducer = (state = initialState, action)=> {
//Varios casos posibles - ver loading: false
    switch(action.type) {
        case GET_ALL_VIDEOGAMES:
            return { ...state, allVideogames: action.payload };
        case GET_VIDEOGAMES_DETAILS:
            return {...state, details: action.payload};
        case CLEAN_VIDEOGAMES_DETAILS:
            return {...state, details:[]}
        case GET_GENRES:
            return {...state, details: action.payload};
        case GET_PLATFORMS:
            return {...state, details: action.payload};
        default:
            return { ...state };
    }
};

export default rootReducer;
