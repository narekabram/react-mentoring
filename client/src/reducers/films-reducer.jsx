import {FILMS_REQUEST_SUCCESS, FILM_REQUEST_FAILURE, FIND_FILM_SUCCESS} from "../actions/types";

export default (state = {
    films: [],
    film: {}
}, action) => {
    switch (action.type) {
        case FIND_FILM_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case FILMS_REQUEST_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case FILM_REQUEST_FAILURE:
            return {
                ...state,
                ...action.payload.error
            };
        default:
            return state
    }
}
