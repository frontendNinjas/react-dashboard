import React from 'react';
import {BrowserRouter as Router,Link, IndexLink} from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './headerStyle.css';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: -6};


class Header extends React.Component {
  render() {
    return (
      <div className="headerContainer">
      <ul>
         <li>
            <List>
              <ListItem disabled={true} leftAvatar={<Avatar src="../src/images/icon.jpg" size={30} style={style}/>}>
              </ListItem>
            </List>
          </li>
          <li>
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}>
              <MenuItem linkButton containerElement={<Link to="/" />} primaryText="Home" />
              <MenuItem linkButton containerElement={<Link to="/login" />} primaryText="Login" />
              <MenuItem linkButton containerElement={<Link to="/products" />} primaryText="Products" />
            </IconMenu>
          </li>
        </ul>
      </div>
    );
  }
}



export default Header;