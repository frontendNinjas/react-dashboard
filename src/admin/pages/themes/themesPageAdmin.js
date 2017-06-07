import React from 'react';
import LeftSidebar from '../../../../src/components/LeftSidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeList from '../../../../src/components/ThemesList';
import {Grid, Row, Col} from 'react-flexbox-grid';
import securedPageAdmin from '../../../../src/admin/pages/securedPageAdmin';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as updateUsersSuccess from '../../../../src/actions/themesAction'

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

class themes extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
         className: 'blue',
    }
    this.props.actions.loadThemes();
    this.updateThemeState = this.updateThemeState.bind(this);
  }

  updateThemeState(id) {
    console.log("this is id", id)
  }

  render() {
    return (
      <div>
        {this.props.themes.map((item,i) => 
          <ThemeList key={i} themes={item} handleClick={this.updateThemeState} id={item.id} colorTxt={item.colorTxt} sampleImage={item.sample} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    themes: state.themes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(updateUsersSuccess, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(themes);
