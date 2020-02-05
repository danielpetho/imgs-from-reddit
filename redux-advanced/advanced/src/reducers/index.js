import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { fetchPostsIfNeeded } from '../actions/network';
import { composeWithDevTools } from 'redux-devtools-extension';


import rootReducer from './reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    ));


store
    .dispatch(fetchPostsIfNeeded('reactjs'))
    .then(() => console.log(store.getState()));