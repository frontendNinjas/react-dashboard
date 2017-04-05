import React, { Component } from 'react';
import { Router,Route,IndexRoute,hashHistory} from 'react-router';
import App from '../src/App.js'
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login';
import Products from '../src/components/products/Products';
import Register from '../src/components/register/Register';

export default(
         <Route path="/" component={App}>
           <IndexRoute component={Home}/>
           <Route path="/login" component={Login}/>
           <Route path="/register" component={Register}/>
           <Route path="/products" component={Products}/>
           <Route path="/products/:productName" component={Products}/>
         </Route>
    )

