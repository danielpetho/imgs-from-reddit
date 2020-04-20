import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";
import { store } from './reducers/index';
import AppContainer from './components/App/AppContainer';
import About from './components/About/About';
import './index.css';


ReactDOM.render(
    (< Provider store={store} >
        <Router>
            <Route exact path="/" component={AppContainer} />
            <Route path="/about" component={About} />
        </Router>

    </Provider >),
    document.getElementById('root'));

