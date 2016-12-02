import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router'
import App from './App';
import About from './About';
import Other from './Other';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/about" component={About} />
    <Route path="/app" component={App} />
    <Route path="/" component={Other} />
  </Router>
  , document.getElementById('root')
);

// ReactDOM.render(
//   <App />, document.getElementById('root')
// );
