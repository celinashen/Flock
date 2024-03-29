import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import IssueDebit from './pages/IssueDebit';
import PayCredit from './pages/PayCredit';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';
import UserFlocks from './pages/UserFlocks'
//import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();