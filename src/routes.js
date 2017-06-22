import React, { Component } from 'react';
import {Route,IndexRoute} from 'react-router';
import AppUser from '../src/AppUser.js'
import AppAdmin from '../src/AppAdmin.js'
import homePageAdmin from '../src/admin/pages/homePageAdmin';
import securedPageAdmin from '../src/admin/pages/securedPageAdmin';
import inventoryPageAdmin from '../src/admin/pages/inventoryPageAdmin';
import productsPageAdmin from '../src/admin/pages/products/productsPageAdmin';
import usersPageAdmin from '../src/admin/pages/users/usersPageAdmin';
import homePageUser from '../src/user/pages/homePageUser';
import registerPageAdmin from '../src/admin/pages/registerPageAdmin';
import websitePagesAdmin from '../src/admin/pages/websitePages/websitePagesAdmin';
import themes from '../src/admin/pages/themes/themesPageAdmin';
import addNewProducts from '../src/admin/pages/products/addNewProducts';
import dashboardMain from '../src/admin/pages/dashboard/dashboardMain';
import addWebsitePage from '../src/admin/pages/websitePages/addWebsitePage';

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
				<Route path="/admin/inventory" component={inventoryPageAdmin}/>
				<Route path="/admin/all-products" component={productsPageAdmin}/>
				<Route path="/admin/all-users" component={usersPageAdmin}/>
				<Route path="/admin/themes" component={themes}/>
				<Route path="/admin/add-new-products" component={addNewProducts}/>
				<Route path="/admin/add-new-products/:id" component={addNewProducts}/>
				<Route path="/admin/add-website" component={addWebsitePage}/>
			</Route> 			
        </Route>  
    )

