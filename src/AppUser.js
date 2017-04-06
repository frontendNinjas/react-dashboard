import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './appStyle.css';
import Header from '../src/components/Header';

class AppUser extends React.Component{
  render(){
    return (
      <div className="container">
      		<MuiThemeProvider>		
			<Header />
		</MuiThemeProvider>		
		<MuiThemeProvider>		
			{this.props.children}	
		</MuiThemeProvider>		
      </div>
    )
  }
}

export default AppUser;