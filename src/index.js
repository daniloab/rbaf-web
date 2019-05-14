import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom'
import Routes from './routes'
import {history} from './helpers/History'

ReactDOM.render(
    <Router history={history}>
        <Routes />
    </Router>
    , document.getElementById('root'));
