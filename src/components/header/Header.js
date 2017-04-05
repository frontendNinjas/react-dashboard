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

import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';


import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {margin: -6};
const styleNotification = {padding:0}



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
              <MenuItem containerElement={<Link to="/" />} primaryText="Home" />
              <MenuItem containerElement={<Link to="/login" />} primaryText="Login" />
              <MenuItem containerElement={<Link to="/products" />} primaryText="Products" />
            </IconMenu>
          </li>
          <li>
            <Badge style={styleNotification}
              badgeContent={10}
              secondary={true}
              badgeStyle={{top: 0, right: -8}}
            >
              <IconButton tooltip="Notifications">
                <NotificationsIcon />
              </IconButton>
            </Badge>
          </li>
        </ul>
      </div>
    );
  }
}



export default Header;