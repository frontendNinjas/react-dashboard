import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, IndexRoute, hashHistory, browserHistory,RouteHandler } from 'react-router-dom';
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class Routes extends Component {
  render() {
    return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
    )
  }
}

export default Routes