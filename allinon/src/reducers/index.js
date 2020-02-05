import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { settingsReducer } from './settings';


export const store = createStore(combineReducers({
    settings: settingsReducer,
}),
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    ));


console.log("storegetState");
console.log(store.getState());