import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import PhotoDetail from './components/images/PhotoDetail';
import { store } from './reducers/index';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";
import About from './components/layout/About';

ReactDOM.render(
    (< Provider store={store} >
        <Router>
            <Route exact path="/" component={AppContainer} />
            <Route path="/about" component={About} />
            <Route path="/teszt" component={PhotoDetail} />
        </Router>

    </Provider >),
    document.getElementById('root'));

