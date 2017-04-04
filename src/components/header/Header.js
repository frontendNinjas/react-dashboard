import React from 'react';
import {BrowserRouter as Router,Link, IndexLink} from 'react-router';
class Header extends React.Component {
  render() {
    return (
    	<div>
        <ul>
          <li><Link activeClassName="activeLinks" to="/home">Home</Link></li>
          <li><Link activeClassName="activeLinks" to="/login">Login</Link></li>
          <li><Link activeClassName="activeLinks" to="/products">Products</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;