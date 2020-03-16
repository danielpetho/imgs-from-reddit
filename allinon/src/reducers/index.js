import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { settingsReducer } from './settings';
import { searchReducer } from './searchbar';
import { fetchReducer } from './fetch';
import { reducer as formReducer } from 'redux-form';

export const store = createStore(combineReducers({
    form: formReducer,
    searchtagState: searchReducer,
    fetchState: fetchReducer,
    settingsState: settingsReducer
}),
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    ));
