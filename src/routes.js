import React, { Component } from 'react';
import {Route,IndexRoute} from 'react-router';
import AppUser from '../src/AppUser.js'
import AppAdmin from '../src/AppAdmin.js'
import homePageAdmin from '../src/admin/pages/homePageAdmin';
import securedPageAdmin from '../src/admin/pages/securedPageAdmin';
import dashboardPageAdmin from '../src/admin/pages/dashboardPageAdmin';
import editUserPageAdmin from '../src/admin/pages/editUserPageAdmin';
import inventoryPageAdmin from '../src/admin/pages/inventoryPageAdmin';
import productsPageAdmin from '../src/admin/pages/productsPageAdmin';
import userPageAdmin from '../src/admin/pages/userPageAdmin';
import homePageUser from '../src/user/pages/homePageUser';
import registerPageAdmin from '../src/admin/pages/registerPageAdmin';
import dashboardPages from '../src/admin/pages/dashboardPages';
import appearance from '../src/admin/pages/appearance';
import addNewUserPageAdmin from '../src/admin/pages/addNewUserPageAdmin';
import addNewProducts from '../src/admin/pages/addNewProducts';

export default(
		<Route>
			<Route path="/" component={AppUser}>
				<IndexRoute component={homePageUser}/>
			</Route> 
			<Route path="/login" component={AppAdmin}>
				<IndexRoute component={homePageAdmin}/>
			</Route> 
			<Route path="/admin" component={securedPageAdmin}>
				<IndexRoute component={dashboardPageAdmin}/>
				<Route path="/admin/register" component={registerPageAdmin}/>
				<Route path="/admin/dashboard-pages" component={dashboardPages}/>
				<Route path="/admin/edit-page" component={editUserPageAdmin}/>
				<Route path="/admin/inventory" component={inventoryPageAdmin}/>
				<Route path="/admin/all-products" component={productsPageAdmin}/>
				<Route path="/admin/all-users" component={userPageAdmin}/>
				<Route path="/admin/add-new-users" component={addNewUserPageAdmin}/>
				<Route path="/admin/appearance" component={appearance}/>
				<Route path="/admin/add-new-products" component={addNewProducts}/>
			</Route> 			
        </Route>  
    )

