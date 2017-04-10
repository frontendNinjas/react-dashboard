import React, { Component } from 'react';
import {Route,IndexRoute} from 'react-router';
import AppUser from '../src/AppUser.js'
import AppAdmin from '../src/AppAdmin.js'
import homePageAdmin from '../src/admin/pages/homePageAdmin';
import SecuredPageAdmin from '../src/admin/pages/SecuredPageAdmin';
import dashboardPageAdmin from '../src/admin/pages/dashboardPageAdmin';
import EditUserPageAdmin from '../src/admin/pages/EditUserPageAdmin';
import InventoryPageAdmin from '../src/admin/pages/InventoryPageAdmin';
import productsPageAdmin from '../src/admin/pages/productsPageAdmin';
import userPageAdmin from '../src/admin/pages/userPageAdmin';
import homePageUser from '../src/user/pages/homePageUser';
import RegisterPageAdmin from '../src/admin/pages/RegisterPageAdmin';
import DashboardPages from '../src/admin/pages/DashboardPages';
import appearance from '../src/admin/pages/appearance';
import addnewuserPageAdmin from '../src/admin/pages/addnewuserPageAdmin';
import addnewproducts from '../src/admin/pages/addnewproducts';

export default(
		<Route>
			<Route path="/" component={AppUser}>
				<IndexRoute component={homePageUser}/>
			</Route> 
			<Route path="/login" component={AppAdmin}>
				<IndexRoute component={homePageAdmin}/>
			</Route> 
			<Route path="/admin" component={SecuredPageAdmin}>
				<IndexRoute component={dashboardPageAdmin}/>
				<Route path="/admin/register" component={RegisterPageAdmin}/>
				<Route path="/admin/DashboardPages" component={DashboardPages}/>
				<Route path="/admin/editpage" component={EditUserPageAdmin}/>
				<Route path="/admin/Inventory" component={InventoryPageAdmin}/>
				<Route path="/admin/products" component={productsPageAdmin}/>
				<Route path="/admin/allusers" component={userPageAdmin}/>
				<Route path="/admin/addnewusers" component={addnewuserPageAdmin}/>
				<Route path="/admin/appearance" component={appearance}/>
				<Route path="/admin/addnewproducts" component={addnewproducts}/>
			</Route> 			
        </Route>  
    )

