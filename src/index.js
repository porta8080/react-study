import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, IndexRedirect, Router, Route, Link, hashHistory } from 'react-router';
import Parent from './Parent';
import Child1 from './Child1';
import Child2 from './Child2';
import About from './About';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Parent} >
      <IndexRedirect to="child1" />
      <Route path="child1" component={Child1}>
        <Route path=":someid" component={Child1} />
      </Route>
      <Route path="child2" component={Child2} />
    </Route>
    <Route path="about" component={About} />
  </Router>
  , document.getElementById('root')
);
