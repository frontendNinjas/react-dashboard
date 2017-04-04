import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, IndexRoute, hashHistory, browserHistory,RouteHandler } from 'react-router';
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login';
import App from '../src/App.js'

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
         <Route path="/" component={App}>
	         <Route path="/home" component={Home}/>
	         <Route path="/login" component={Login}/>
         </Route>
      </Router>
    )
  }
}

export default Routes