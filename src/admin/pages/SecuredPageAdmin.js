import React from 'react';
import LeftSidebar from '../../../src/components/LeftSidebar';
import DashboardHeaderAdmin from '../../../src/admin/pages/dashboardHeaderAdmin';
import RightContainer from '../../../src/components/RightContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class securedPageAdmin extends React.Component{	

  constructor(props) {
    super(props)
    this.state = ({color: 'lime'})
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.color === 'lime'){
         this.setState({color: 'blue'})
    } else {
        this.setState({color: 'lime'})
    }
  }

  render(){
    return (
     <div>
        <MuiThemeProvider> 
         <DashboardHeaderAdmin />    
        </MuiThemeProvider> 
        <MuiThemeProvider> 
          <LeftSidebar color={this.state.color} />
        </MuiThemeProvider>  
        <MuiThemeProvider>    
          <RightContainer body={this.props.children} handleClick={this.handleClick}/>
        </MuiThemeProvider>   
     </div>	
    )
  }
}

export default securedPageAdmin