import { FETCH_FILM, ADD_FILM, REMOVE_FILM } from './actionTypes';
import axios from 'axios';

/**
 *  Invoke axios for send the Http request to backend server for get the data. Use the pure function to
 *  define different kinds of action with action type and payload.
 */

export const addFilm = (film) => ({
    type: ADD_FILM,
    film,
});

export const removeFilm = (film) => ({
    type: REMOVE_FILM,
    film,
});

export const fetchFilm = (listFilm) => ({
    type: FETCH_FILM,
    listFilm,
});

export const fetchFilmData = () => {
    return (dispatch) => {
        return axios.get(`./mockData.json`, {headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}})
            .then(response => {
                dispatch(fetchFilm(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};