import { combineReducers } from 'redux';
import filmsData from './films-reducer';

const rootReducer = combineReducers({
    filmsData,
});

export default rootReducer;
