import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './appStyle.css';

class AppAdmin extends React.Component{	
  render(){
    return (
		<MuiThemeProvider>		
			{this.props.children}	
		</MuiThemeProvider>		
    )
  }
}

export default AppAdmin;