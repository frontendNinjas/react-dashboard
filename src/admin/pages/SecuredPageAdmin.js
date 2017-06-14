import React from 'react';
import LeftSidebar from '../../../src/components/LeftSidebar';
import DashboardHeaderAdmin from '../../../src/admin/pages/dashboardHeaderAdmin';
import RightContainer from '../../../src/components/RightContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import themes from '../../../src/admin/pages/themes/themesPageAdmin';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as themesAction from '../../../src/actions/themesAction'

class securedPageAdmin extends React.Component {
  constructor(props) {
    super(props)
    this
      .props
      .actions
      .initialState();
  }

  render() {
    const {defaultTheme} = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <DashboardHeaderAdmin/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <LeftSidebar themes={defaultTheme}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <RightContainer body={this.props.children}/>
        </MuiThemeProvider>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {defaultTheme: state.defaultTheme}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(themesAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(securedPageAdmin);