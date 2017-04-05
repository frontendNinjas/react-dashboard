import React, { Component } from 'react';
import {Route,IndexRoute} from 'react-router';
import AppUser from '../src/AppUser.js'
import AppAdmin from '../src/AppAdmin.js'
import homePageAdmin from '../src/admin/pages/homePageAdmin';
import homePageUser from '../src/user/pages/homePageUser';

export default(
		<Route>
			<Route path="/" component={AppUser}>
				<IndexRoute component={homePageUser}/>
			</Route> 
			<Route path="/admin" component={AppAdmin}>
				<IndexRoute component={homePageAdmin}/>
			</Route> 
        </Route>  
    )

