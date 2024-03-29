import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/index.scss';
import App from './App';
import Details from './Details';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/details/:name" component={Details} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
