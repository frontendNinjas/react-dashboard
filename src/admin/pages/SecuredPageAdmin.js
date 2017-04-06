import React from 'react';
import LeftSidebar from '../../../src/components/LeftSidebar';
import DashboardHeaderAdmin from '../../../src/admin/pages/dashboardHeaderAdmin';
import RightContainer from '../../../src/components/RightContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class SecuredPageAdmin extends React.Component{	
  render(){
    return (
     <div>
        <MuiThemeProvider> 
         <DashboardHeaderAdmin />    
        </MuiThemeProvider> 
        <MuiThemeProvider> 
          <LeftSidebar />
        </MuiThemeProvider>  
        <MuiThemeProvider>    
          <RightContainer body={this.props.children}/>
        </MuiThemeProvider>   
     </div>	
    )
  }
}

export default SecuredPageAdmin