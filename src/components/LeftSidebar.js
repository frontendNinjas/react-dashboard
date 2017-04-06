import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';

class LeftSidebar extends React.Component{	
  render(){
    return (
		<div className="sidebar-wrapper">
          <MenuItem className="whiteColor">Dashboard</MenuItem>
          <MenuItem className="whiteColor">Pages</MenuItem>
          <MenuItem containerElement={<Link to="/admin/products" />} className="whiteColor">Products</MenuItem>
          <MenuItem className="whiteColor">Users</MenuItem>
          <MenuItem className="whiteColor">Setting</MenuItem>
          <MenuItem className="whiteColor">Appearance</MenuItem>
		</div>	
    )
  }
}

export default LeftSidebar