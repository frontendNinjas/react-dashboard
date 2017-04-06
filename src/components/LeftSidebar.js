import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {Link, IndexLink} from 'react-router';

class LeftSidebar extends React.Component{	
  render(){
    return (
		<div className="sidebar-wrapper">
          <MenuItem containerElement={<Link to="/admin" />} className="whiteColor">Dashboard</MenuItem>
          <MenuItem containerElement={<Link to="/admin/DashboardPages" />} className="whiteColor">Pages</MenuItem>
          <MenuItem containerElement={<Link to="/admin/products" />} className="whiteColor">Products</MenuItem>
          <MenuItem containerElement={<Link to="/admin/users" />} className="whiteColor">Users</MenuItem>
          <MenuItem containerElement={<Link to="/admin/Inventory" />} className="whiteColor">Inventory</MenuItem>
          <MenuItem containerElement={<Link to="/admin/appearance" />} className="whiteColor">Appearance</MenuItem>
		</div>	
    )
  }
}

export default LeftSidebar