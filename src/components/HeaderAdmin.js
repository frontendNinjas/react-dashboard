import React from 'react';
import {BrowserRouter as Router,Link, IndexLink} from 'react-router';
import '../styles/index.css';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';


class HeaderAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, index, value) {this.setState({value});}


  render() {
    return (
        <header>
	        <Toolbar className="noBg">
	          <ToolbarGroup>
	           <a href="/"><img className="logo" src="../src/images/logo.png" /></a>
	          </ToolbarGroup>
	          <ToolbarGroup>
                <ToolbarTitle text="Harminder" />
	            <ToolbarSeparator />
	            <IconMenu
	              iconButtonElement={
	                <IconButton touch={true}>
	                  <NavigationExpandMoreIcon />
	                </IconButton>
	              }
	            >
	              <MenuItem containerElement={<Link to="/login" />} primaryText="Logout" />
	              <MenuItem containerElement={<Link to="/" />} primaryText="User" />
	            </IconMenu>
	          </ToolbarGroup>
	        </Toolbar>
        </header>
    );
  }
}



export default HeaderAdmin;