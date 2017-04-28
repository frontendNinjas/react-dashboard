import React from 'react';
import ReactDOM from 'react-dom';
import { Router,hashHistory} from 'react-router';
import Routes from '../src/routes.js'
import {Provider} from 'react-redux';
import App from '../src/App.js'
import {loadUsers} from '../src/actions/userActions'
import {loadToDoList} from '../src/actions/toDoListActions'
import {loadProducts} from '../src/actions/productActions'
import configureStore from '../src/store/configureStore';
const store = configureStore();
store.dispatch(loadUsers());
store.dispatch(loadToDoList());
store.dispatch(loadProducts());
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={Routes} component={App}/>
	</Provider>, 
	document.getElementById('app')

);
