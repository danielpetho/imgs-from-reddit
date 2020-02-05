import { reducer as todoReducer } from './todos';
//import { combineReducers } from 'redux-immutablejs'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form/immutable'
import thunkMiddleware from 'redux-thunk';

export const store = createStore(combineReducers({
    form: formReducer,
    todos: todoReducer
}),
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    ));