import {
    CLEAN_VIDEOGAMES_DETAILS,
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAMES_DETAILS,
    GET_GENRES, 
    GET_PLATFORMS,
    POST_NEW_VIDEOGAME,
    SEARCH_GAMES_BY_NAME,
    ORDER_BY,
    FILTER_BY_SOURCE,
    FILTER_BY_GENRE,
    FILTER_REMOVE
} from './actions';

//Punto de partida cuando comience la aplicacion
const initialState = { 
    allVideogames: [],
    videogamesForFilter: [],
    details: [], // {} Es un objeto porque tiene la informacion de un solo personaje
    genres: [],
    platforms: []
};

const rootReducer = (state = initialState, action)=> {
//Varios casos posibles - ver loading: false
    switch(action.type) {
        case GET_ALL_VIDEOGAMES:
            return { ...state, allVideogames: action.payload, videogamesForFilter: action.payload };
        case GET_VIDEOGAMES_DETAILS:
            return {...state, details: [action.payload]};
        case CLEAN_VIDEOGAMES_DETAILS:
            return {...state, details:[]}
        case GET_GENRES:
            return {...state, genres: action.payload};
        case GET_PLATFORMS:
            return {...state, platforms: action.payload};
        case POST_NEW_VIDEOGAME:
            return {...state}
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
        }
        case FILTER_BY_SOURCE:
            let getGames = state.videogamesForFilter;
            let filter = []

            switch(action.payload){
                case 'uuid': 
                filter = getGames.filter(e=> (e.id.length > 5))
                break;
                case 'api':
                filter = getGames.filter(e=> typeof(e.id) === 'number')
                break;
            default:
                filter = getGames;
                break;
            }
        return {
            ...state,
            allVideogames: filter
        }
        case FILTER_BY_GENRE: //ver!!
            let getGamesGenre = state.videogamesForFilter;
            let aux = [];
            if(action.payload) {
                aux = getGamesGenre.filter(e => {
                    if(e.genres.some(e => e.name === action.payload)) {
                        return e.genres.map(g => g.name)
                    } 
                    else if(action.payload === 'All Genres') {
                        return getGamesGenre
                    }
                    })
    
            } else {
                aux = getGamesGenre;
            }
            return {
                ...state,
                allVideogames: aux,
            }
        case FILTER_REMOVE:
            return{
                ...state,
                allVideogames: state.videogamesForFilter
            }
        default:
            return { ...state };

    }
};

export default rootReducer;
