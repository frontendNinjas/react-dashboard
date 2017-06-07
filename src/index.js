import React from 'react';
import ReactDOM from 'react-dom';
import { Router,hashHistory} from 'react-router';
import Routes from '../src/routes.js'
import {Provider} from 'react-redux';
import App from '../src/App.js'
import {loadProducts} from '../src/actions/productActions'
import configureStore from '../src/store/configureStore';
import {loadThemes} from '../src/actions/themesAction'
const store = configureStore();
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={Routes} component={App}/>
	</Provider>, 
	document.getElementById('app')

);
