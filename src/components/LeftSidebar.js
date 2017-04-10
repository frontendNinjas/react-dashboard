import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {Link, IndexLink} from 'react-router';

class LeftSidebar extends React.Component{	
  render(){
    return (
		<div className="sidebar-wrapper">
          <MenuItem containerElement={<Link to="/admin" />} className="whiteColor">Dashboard</MenuItem>
          <MenuItem containerElement={<Link to="/admin/DashboardPages" />} className="whiteColor">Pages</MenuItem>
          <MenuItem className="whiteColor">Products
              <MenuItem containerElement={<Link to="/admin/products" />} className="whiteColor">All Products</MenuItem>
              <MenuItem containerElement={<Link to="/admin/addnewproducts" />} className="whiteColor">Add New</MenuItem>
          </MenuItem>
          <MenuItem className="whiteColor">Users
              <MenuItem containerElement={<Link to="/admin/allusers" />} className="whiteColor">All Users</MenuItem>
              <MenuItem containerElement={<Link to="/admin/addnewusers" />} className="whiteColor">Add New User</MenuItem>       
          </MenuItem>
          <MenuItem containerElement={<Link to="/admin/Inventory" />} className="whiteColor">Inventory</MenuItem>
          <MenuItem containerElement={<Link to="/admin/appearance" />} className="whiteColor">Appearance</MenuItem>
		</div>	
    )
  }
}

export default LeftSidebar