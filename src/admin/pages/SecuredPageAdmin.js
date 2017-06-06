import React from 'react';
import LeftSidebar from '../../../src/components/LeftSidebar';
import DashboardHeaderAdmin from '../../../src/admin/pages/dashboardHeaderAdmin';
import RightContainer from '../../../src/components/RightContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import themes from '../../../src/admin/pages/themes/themes';

class securedPageAdmin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      colorLists: 'blue'
    }
    // this.props.actions.updatedThemes();
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <DashboardHeaderAdmin/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <LeftSidebar themeClass={this.state.colorLists}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <RightContainer body={this.props.children}/>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default securedPageAdmin