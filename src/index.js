import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,IndexRoute,hashHistory} from 'react-router';
import App from '../src/App.js'
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login';
import Products from '../src/components/products/Products';
import userApi from '../src/Api/userApi.js';

ReactDOM.render(<Router history={hashHistory}>
         <Route path="/" component={App}>
         	 <IndexRoute component={Home}/>
	         <Route path="/login" component={Login}/>
	         <Route path="/products" component={Products}/>
	         <Route path="/products/:productName" component={Products}/>
         </Route>
    </Router>, document.getElementById('app'));