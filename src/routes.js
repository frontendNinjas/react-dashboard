import React, { Component } from 'react';
import {Route,IndexRoute} from 'react-router';
import AppUser from '../src/AppUser.js'
import AppAdmin from '../src/AppAdmin.js'
import homePageAdmin from '../src/admin/pages/homePageAdmin';
import dashboardPageAdmin from '../src/admin/pages/dashboardPageAdmin';
import EditUserPageAdmin from '../src/admin/pages/EditUserPageAdmin';
import InventoryPageAdmin from '../src/admin/pages/InventoryPageAdmin';
import productsPageAdmin from '../src/admin/pages/productsPageAdmin';
import userPageAdmin from '../src/admin/pages/userPageAdmin';
import homePageUser from '../src/user/pages/homePageUser';
import RegisterPageAdmin from '../src/admin/pages/RegisterPageAdmin';

export default(
		<Route>
			<Route path="/" component={AppUser}>
				<IndexRoute component={homePageUser}/>
			</Route> 
			<Route path="/admin" component={AppAdmin}>
				<IndexRoute component={homePageAdmin}/>
				<Route path="/admin/register" component={RegisterPageAdmin}/>
				<Route path="/admin/dashboard" component={dashboardPageAdmin}/>
				<Route path="/admin/editpage" component={EditUserPageAdmin}/>
				<Route path="/admin/Inventory" component={InventoryPageAdmin}/>
				<Route path="/admin/products" component={productsPageAdmin}/>
				<Route path="/admin/users" component={userPageAdmin}/>
			</Route> 
        </Route>  
    )

