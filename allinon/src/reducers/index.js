import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { settingsReducer } from './settings';
import { searchReducer } from './search';
import { reducer as formReducer } from 'redux-form';

export const store = createStore(combineReducers({
    form: formReducer,
    searchtagState: searchReducer,
    settingsState: settingsReducer
}),
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    ));
