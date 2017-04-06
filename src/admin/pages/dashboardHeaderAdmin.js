import React from 'react';
import HeaderAdmin from '../../../src/components/HeaderAdmin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sidebar from '../../../src/components/Sidebar';

class DashboardHeaderAdmin extends React.Component{	
  render(){
    return (
		     <MuiThemeProvider>		
		       <HeaderAdmin />
		     </MuiThemeProvider>	
    )
  }
}

export default DashboardHeaderAdmin