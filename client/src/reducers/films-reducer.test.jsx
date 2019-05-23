import * as actions from '../actions/film-action';
import * as types from '../actions/types';
import {FILMS_REQUEST_SUCCESS} from "../actions/types";

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const text = 'Finish docs';
        const expectedAction = {
            type: types.FILMS_REQUEST_SUCCESS,
            text
        };
        expect(actions.filmRequestSuccess(text)).toEqual(expectedAction)
    })
})
