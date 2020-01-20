import { combineReducers } from 'redux';
import filmReducer from './filmReducer.js';

const rootReducer = combineReducers({
    films: filmReducer,
});
export default rootReducer;