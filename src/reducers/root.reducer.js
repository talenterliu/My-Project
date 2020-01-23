import { combineReducers } from 'redux';
import filmReducer from './filmReducer.js';

/**
 * Set up the rootReducer to connect with redux store
 */

const rootReducer = combineReducers({
    films: filmReducer,
});
export default rootReducer;