import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/root.reducer";
import React from 'react';
import { Provider } from 'react-redux';
import NetFlix from '../src/containers/netFlix/Netflix';

/**
 * Set up the redux store. Use Redux-Thunk as the middlware. And use <Provider> tag to connect the store with the react application
 */

const initialState = {};
const middlewares = [
    thunk,
];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
)

function App() {
  return (
    <Provider store={store}>
      <NetFlix />
    </Provider>
  );
}

export default App;

