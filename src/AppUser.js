import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './appStyle.css';

class AppUser extends React.Component{
  render(){
    return (
      <div className="container">
		<MuiThemeProvider>		
			{this.props.children}	
		</MuiThemeProvider>		
      </div>
    )
  }
}

export default AppUser;