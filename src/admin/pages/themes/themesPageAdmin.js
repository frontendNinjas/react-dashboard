import React from 'react';
import LeftSidebar from '../../../../src/components/LeftSidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeList from '../../../../src/components/ThemesList';
import {Grid, Row, Col} from 'react-flexbox-grid';
import securedPageAdmin from '../../../../src/admin/pages/securedPageAdmin';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as themesAction from '../../../../src/actions/themesAction'

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
    this
      .props
      .actions
      .loadThemes();
    this.updateThemeState = this
      .updateThemeState
      .bind(this);
  }

  updateThemeState(id) {
    this.props.actions.updateThemeState(id);
  }

  render() {
    return (
      <Row >
        {this
          .props
          .themes
          .map((item, i) => <ThemeList
            key={i}
            themes={item}
            handleClick={this.updateThemeState}
            id={item.id}
            colorTxt={item.colorTxt}
            sampleImage={item.sample}/>)}
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {themes: state.themes}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(themesAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(themes);
