import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { settingsReducer } from './settings';
import { searchReducer } from './searchbar';
import { postsReducer } from './posts';
import { reducer as formReducer } from 'redux-form';
import {processQuery} from "../actions/searchbar";


export const store = createStore(combineReducers({
    form: formReducer,
    searchtagState: searchReducer,
    postsState: postsReducer,
    settingsState: settingsReducer
}),
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    ));



    let initSubreddits = {
        searchValues: "minimalist_art"
    }
store.dispatch(processQuery(initSubreddits));