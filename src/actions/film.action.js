import { FETCH_FILM, ADD_FILM, REMOVE_FILM } from './actionTypes';
import axios from 'axios';

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