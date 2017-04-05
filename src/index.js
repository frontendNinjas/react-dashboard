import React from 'react';
import ReactDOM from 'react-dom';
import { Router,hashHistory} from 'react-router';
import Routes from '../src/routes.js'
import App from '../src/App.js'


ReactDOM.render(<Router history={hashHistory} routes={Routes} component={App}/>, document.getElementById('app'));
