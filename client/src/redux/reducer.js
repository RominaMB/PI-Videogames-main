import {
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAMES_DETAILS,
    CLEAN_VIDEOGAMES_DETAILS,
    GET_GENRES, 
    SEARCH_GAMES_BY_NAME,

    ORDER_BY,
    FILTER_BY_SOURCE,
    FILTER_BY_GENRE,
    
    CHANGE_PAGE,
} from './actions';

//Punto de partida cuando comience la aplicacion
const initialState = { 
    allVideogames: [],
    videogamesForFilter: [],
    details: [], 
    genres: [],
    platforms: [],

    videogamesPerPage: 9, 
    currentPage: 1,
};

const rootReducer = (state = initialState, action)=> {

    switch(action.type) {
        case GET_ALL_VIDEOGAMES:
            return {...state, allVideogames: action.payload, videogamesForFilter: action.payload};
        case GET_VIDEOGAMES_DETAILS:
            return {...state, details: [action.payload]};
        case CLEAN_VIDEOGAMES_DETAILS:
            return {...state, details:[]}
        case GET_GENRES:
            return {...state, genres: action.payload};
        case SEARCH_GAMES_BY_NAME:
            return{...state, allVideogames: action.payload};
        case ORDER_BY:
                let gamesCopy = [...state.allVideogames];
                let order 
                
                switch(action.payload){
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
                    case 'AscRating':
                        order = gamesCopy.sort((a,b)=> b.rating - a.rating)
                        break;
                    case 'DescRating':
                        order = gamesCopy.sort((a,b)=> a.rating - b.rating)
                    break;
                default:
                    order = gamesCopy;
                    break;
        }
        return {
            ...state,
            allVideogames: order,
            currentPage: 1
        }
        case FILTER_BY_SOURCE:
            let getGames = state.videogamesForFilter;
            let filter = []

            switch(action.payload){
                case 'uuid': 
                filter = getGames.filter(e=> (e.id.length > 5)) // devuelve los uuid, ya que son muchos caracteres.
                break;
                case 'api':
                filter = getGames.filter(e=> typeof(e.id) === 'number') // devuelve los id que son numeros. Typeof indica el tipo de (e.id).
                break;
            default:
                filter = getGames;
                break;
            }
        return {
            ...state,
            allVideogames: filter,
            currentPage: 1,
        }
        case FILTER_BY_GENRE:
            const videogames = state.videogamesForFilter;
            const aux = action.payload === 'All Genres' ? videogames : videogames.filter(g => g.genres.some(f => f.name === action.payload));
            return{ 
                ...state,
                allVideogames: aux,
                currentPage: 1
            }

        //condicion --> action.payload es All Genres
        //expresion 1 --> true, retorna todos los videogames
        //expresion 2 --> false, filtra los juegos, por cada juego comprueba si existe alguno con genero igual a action.payload.

        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: Number(action.payload)? parseInt(action.payload) : action.payload === 'Next' ? (parseInt(state.currentPage) + 1 )
                : (parseInt(state.currentPage) - 1 )
            }

        //condicion action payload es un numero
        //expresion 1 --> true, convierto action.payload a un num entero
        //expresion 2 --> false, {
        //                        condicion action.payload es Next
        //                        expresion 1 --> true, le sumo 1 al estado de currentPage
        //                        expresion 2 --> false (es decir es Prev), le resto 1 al estado de currentPage
        //}                        

        default:
            return { ...state };

    }
};

export default rootReducer;
