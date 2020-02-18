import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import { store } from './reducers/index';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";
import About from './components/layout/About';

ReactDOM.render(
    (< Provider store={store} >
        <Router>
            <Route exact path="/" component={AppContainer} />
            <Route path="/about" component={About} />
        </Router>

    </Provider >),
    document.getElementById('root'));

