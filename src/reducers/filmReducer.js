import {
    FETCH_FILM,
    ADD_FILM,
    REMOVE_FILM
} from '../actions/actionTypes';

const initialState = {
    myList: [],
    recommendations: [],
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILM: {
            return Object.assign({}, state, {myList: action.listFilm.myList, recommendations: action.listFilm.recommendations});
        }
        case ADD_FILM: {
            return {
                ...state,
                myList: [...state.myList, action.film],
                recommendations: state.recommendations.filter(film => film.id !== action.film.id),
            };
        }
        case REMOVE_FILM: {
            return {
                ...state,
                myList: state.myList.filter(film => film.id !== action.film.id),
                recommendations: [...state.recommendations, action.film],
            };
        }
        default:
            return state;
    }
}

export default filmReducer;