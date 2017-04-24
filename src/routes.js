import React, { Component } from 'react';
import {Route,IndexRoute} from 'react-router';
import AppUser from '../src/AppUser.js'
import AppAdmin from '../src/AppAdmin.js'
import homePageAdmin from '../src/admin/pages/homePageAdmin';
import securedPageAdmin from '../src/admin/pages/securedPageAdmin';
import manageUserPageAdmin from '../src/admin/pages/manageUserPageAdmin';
import inventoryPageAdmin from '../src/admin/pages/inventoryPageAdmin';
import productsPageAdmin from '../src/admin/pages/productsPageAdmin';
import userPageAdmin from '../src/admin/pages/userPageAdmin';
import homePageUser from '../src/user/pages/homePageUser';
import registerPageAdmin from '../src/admin/pages/registerPageAdmin';
import websitePagesAdmin from '../src/admin/pages/websitePagesAdmin';
import themes from '../src/admin/pages/themes';
import addNewUserPageAdmin from '../src/admin/pages/addNewUserPageAdmin';
import addNewProducts from '../src/admin/pages/addNewProducts';
import dashboardMain from '../src/admin/pages/dashboardMain';

export default(
		<Route>
			<Route path="/" component={AppUser}>
				<IndexRoute component={homePageUser}/>
			</Route> 
			<Route path="/login" component={AppAdmin}>
				<IndexRoute component={homePageAdmin}/>
			</Route> 
			<Route path="/admin" component={securedPageAdmin}>
				<IndexRoute component={dashboardMain}/>
				<Route path="/admin/register" component={registerPageAdmin}/>
				<Route path="/admin/website-pages-admin" component={websitePagesAdmin}/>
				<Route path="/admin/manage-user" component={manageUserPageAdmin}/>
				<Route path="/admin/manage-user/:id" component={manageUserPageAdmin}/>
				<Route path="/admin/inventory" component={inventoryPageAdmin}/>
				<Route path="/admin/all-products" component={productsPageAdmin}/>
				<Route path="/admin/all-users" component={userPageAdmin}/>
				<Route path="/admin/add-new-users" component={addNewUserPageAdmin}/>
				<Route path="/admin/themes" component={themes}/>
				<Route path="/admin/add-new-products" component={addNewProducts}/>
			</Route> 			
        </Route>  
    )

