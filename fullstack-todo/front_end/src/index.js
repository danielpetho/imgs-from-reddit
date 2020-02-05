import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import { HashRouter as Router, Route } from "react-router-dom";

import { store } from './reducers/index';
import { Provider } from 'react-redux';
import TodoDetailContainer from './containers/TodoDetailContainer';
import NewTodoContainer from './containers/NewTodoContainer';

import api from './api';
import { massAddTodo } from './actions/todos';

ReactDOM.render(

    (< Provider store={store} >
        <Router>
            <Route exact path="/" component={AppContainer} />
            <Route path="/todo/:id" component={TodoDetailContainer} />
            <Route path="/newtodo" component={NewTodoContainer} />
        </Router>

    </Provider >),
    document.getElementById('root'));


api('GET', '', {}, (res) => {
    store.dispatch(massAddTodo(res.map(e => {
        e.id = e._id;
        delete e._id;
        e.done = e.done === 'true';
        return e;
    })));
});