import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router-dom';
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
      <div>
        <Route exact path='/Home' component={Home} />
        <Route path='/' component={Login} />
       </div> 
      </Router>
    )
  }
}

export default Routes