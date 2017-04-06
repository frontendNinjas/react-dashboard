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


class Header extends React.Component {

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
         <div className="container">
            <div className="top-header">
                <Toolbar className="noBg">
                  <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                      <MenuItem value={1} primaryText="US Dollar" />
                      <MenuItem value={2} primaryText="IND Rupee" />
                      <MenuItem value={3} primaryText="AU Dollar" />
                    </DropDownMenu>
                  </ToolbarGroup>
                  <ToolbarGroup>
                   <img className="logo" src="../src/images/logo.png" /> 
                  </ToolbarGroup>
                  <ToolbarGroup>
                    <MenuItem containerElement={<Link to="/login" />} primaryText="Login" />
                    <MenuItem containerElement={<Link to="/admin/register" />} primaryText="Register" />
                    <ToolbarSeparator />
                    <IconMenu
                      iconButtonElement={
                        <IconButton touch={true}>
                          <NavigationExpandMoreIcon />
                        </IconButton>
                      }
                    >
                      <MenuItem primaryText="My Account" />
                      <MenuItem primaryText="Wish List" />
                      <MenuItem primaryText="Shopping Cart" />
                      <MenuItem primaryText="Checkout" />
                    </IconMenu>
                  </ToolbarGroup>
                </Toolbar>
            </div>
            <div className="main-header">
              <Toolbar className="noBg">
                <ToolbarGroup>
                  <MenuItem containerElement={<Link to="/" />} primaryText="Home" />
                  <MenuItem primaryText="Shop" />
                  <MenuItem primaryText="Services" />
                  <MenuItem containerElement={<Link to="/products" />} primaryText="Products" /> 
                  <MenuItem primaryText="Blogs" /> 
                  <MenuItem primaryText="Contacts" /> 
                </ToolbarGroup>
                <ToolbarGroup>
                   <input type="search" placeholder="Search..." />
                </ToolbarGroup>
              </Toolbar>
            </div>
          </div>
        </header>
    );
  }
}



export default Header;