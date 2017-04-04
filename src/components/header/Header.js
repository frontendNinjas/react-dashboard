import React from 'react';
import {BrowserRouter as Router,Link, IndexLink} from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './headerStyle.css';

class Header extends React.Component {
  render() {
    return (
      <div className="headerContainer">
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem linkButton containerElement={<Link to="/" />} primaryText="Home" />
          <MenuItem linkButton containerElement={<Link to="/login" />} primaryText="Login" />
          <MenuItem linkButton containerElement={<Link to="/products" />} primaryText="Products" />
        </IconMenu>
      </div>
    );
  }
}



export default Header;