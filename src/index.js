import React from 'react';
import ReactDOM from 'react-dom';
import { Router,hashHistory} from 'react-router';
import Routes from '../src/routes.js'
import {Provider} from 'react-redux';
import App from '../src/App.js'
import configureStore from '../src/store/configureStore';
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={Routes} component={App}/>
	</Provider>, 
	document.getElementById('app')

);
