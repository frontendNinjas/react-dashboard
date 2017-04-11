import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {Link, IndexLink} from 'react-router';

class LeftSidebar extends React.Component{	
  render(){
    return (
		<div className="sidebar-wrapper">
          <MenuItem containerElement={<Link to="/admin" />} className="whiteColor">Dashboard</MenuItem>
          <MenuItem containerElement={<Link to="/admin/dashboard-pages" />} className="whiteColor">Pages</MenuItem>
          <MenuItem className="whiteColor">Products
              <MenuItem containerElement={<Link to="/admin/all-products" />} className="whiteColor">All Products</MenuItem>
              <MenuItem containerElement={<Link to="/admin/add-new-products" />} className="whiteColor">Add New</MenuItem>
          </MenuItem>
          <MenuItem className="whiteColor">Users
              <MenuItem containerElement={<Link to="/admin/all-users" />} className="whiteColor">All Users</MenuItem>
              <MenuItem containerElement={<Link to="/admin/add-new-users" />} className="whiteColor">Add New User</MenuItem>       
          </MenuItem>
          <MenuItem containerElement={<Link to="/admin/inventory" />} className="whiteColor">Inventory</MenuItem>
          <MenuItem containerElement={<Link to="/admin/appearance" />} className="whiteColor">Appearance</MenuItem>
		</div>	
    )
  }
}

export default LeftSidebar