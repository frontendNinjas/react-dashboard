import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {Link, IndexLink} from 'react-router';

const LeftSidebar = (props) => {
  return (
    <div className="sidebar-wrapper">
      <div className={props.themes}>
        <MenuItem containerElement={< Link to = "/admin" />}>Dashboard</MenuItem>
        <MenuItem containerElement={< Link to = "/admin/website-pages-admin" />}>Pages</MenuItem>
        <MenuItem
          className="whiteColor"
          containerElement={< Link to = "/admin/all-products" />}>Products
        </MenuItem>
        <MenuItem containerElement={< Link to = "/admin/all-users" />}>Users
        </MenuItem>
        <MenuItem containerElement={< Link to = "/admin/inventory" />}>Inventory</MenuItem>
        <MenuItem containerElement={< Link to = "/admin/themes" />}>Themes
        </MenuItem>
      </div>
    </div>
  )
}

export default LeftSidebar