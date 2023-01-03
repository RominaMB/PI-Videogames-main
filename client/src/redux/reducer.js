import { GET_ALL_VIDEOGAMES } from './actions';

//Punto de partida cuando comience la aplicacion
const initialState = { 
    allVideogames: [],
    detail: {}, // Es un objeto porque tiene la informacion de un solo personaje
};

const rootReducer = (state = initialState, action)=> {
//Varios casos posibles
    switch(action.type) {
        case GET_ALL_VIDEOGAMES:
            return { ...state, allVideogames: action.payload };
        default:
            return { ...state };
    }
};

export default rootReducer;
