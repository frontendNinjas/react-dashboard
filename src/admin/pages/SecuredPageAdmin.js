import React from 'react';
import LeftSidebar from '../../../src/components/LeftSidebar';
import DashboardHeaderAdmin from '../../../src/admin/pages/dashboardHeaderAdmin';
import RightContainer from '../../../src/components/RightContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import themes from '../../../src/admin/pages/themes/themesPageAdmin';

class securedPageAdmin extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      themes: 'blue'
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <DashboardHeaderAdmin/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <LeftSidebar themes={this.state.themes}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <RightContainer body={this.props.children} />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default securedPageAdmin