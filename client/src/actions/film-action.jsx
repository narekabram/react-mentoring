import {
    FILMS_REQUEST_SUCCESS,
    FILM_REQUEST_FAILURE, FIND_FILM_SUCCESS,
} from "./types";

export const getFilms = (text, type) => {
    return (dispatch) => {
        fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${text}&searchBy=${type}`)
            .then(res => res.json())
            .then( data => {
                dispatch(filmRequestSuccess(data))
            });
    };
};

export const getFilm = (id) => {
    return (dispatch) => {
        fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
            .then(res => res.json())
            .then( data => {
                getFilms(data.genres[0], 'genres')(dispatch);
                dispatch(findFilmSuccess(data));
            });
    };
};

const filmRequestSuccess = (films) => ({
    type: FILMS_REQUEST_SUCCESS,
    payload: {
        films: films.data,
        ...films
    }
});

const findFilmSuccess = (film) => ({
    type: FIND_FILM_SUCCESS,
    payload: {
        film: film,
        ...film
    }
});

const filmRequestFailure = (error) => ({
    type: FILM_REQUEST_FAILURE,
    payload: {
        error
    }
});
