import { CLEAN_VIDEOGAMES_DETAILS, GET_ALL_VIDEOGAMES, GET_VIDEOGAMES_DETAILS, GET_GENRES, GET_PLATFORMS,
         SEARCH_GAMES_BY_NAME,
         ORDER_BY} from './actions';

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
            return {...state, genres: action.payload};
        case GET_PLATFORMS:
            return {...state, platforms: action.payload};
        case SEARCH_GAMES_BY_NAME:
            return{...state, allVideogames: action.payload};
        case ORDER_BY:
                let gamesCopy = [...state.allVideogames];
                let order 
                
                switch(action.payload){
                    case 'All':
                        order = [...state.allVideogames];
                        break;
                    case 'A-Z':
                        order = gamesCopy.sort((a,b)=> {
                        a= a.name.toLowerCase();
                        b= b.name.toLowerCase();
                        if(a === b) {
                            return 0;
                        }
                        if (a < b) {
                            return -1;
                        }
                        return 1;
                    });
                    break;
                    case 'Z-A':
                    order = gamesCopy.sort((a,b)=> {
                        a= a.name.toLowerCase();
                        b= b.name.toLowerCase();
                        if(a === b) {
                            return 0;
                        }
                        if (a > b) {
                            return -1;
                        }
                        return 1;
                    });
                    break;
                default:
                    order = gamesCopy;
                    break;
        }
        return {
            ...state,
            allVideogames: order,
        }
        
        default:
            return { ...state };

    }
};

export default rootReducer;
