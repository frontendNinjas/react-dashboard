import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import Input from '../../../../src/components/Input';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Buttons from '../../../../src/components/Buttons';
import NewPageForm from '../../../../src/components/forms/newPageForm'
import * as pagesAction from '../../../../src/actions/pagesAction'

const style = {
  margin: 12
};

const styles = {
  imgPreviewDiv: {
    top: 10,
    position: 'relative',
    width: 250,
    height: 200,
    overflow: 'hidden'
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
};

class addWebsitePage extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this
      .onChange
      .bind(this);
    this.savePages = this
      .savePages
      .bind(this);
    this.state = {
      pages: {
        title: '',
        author: '',
        bodyHtml: '',
        date: '',
        pageTemplate: '',
        file: ''
      }
    }
  }

  onChange(e) {
    e.preventDefault();
    const field = e.target.name;
    let newPage = Object.assign({}, this.state.pages)
    newPage[field] = e.target.value;
    this.setState({pages: newPage});
  }

  savePages(e) {
    e.preventDefault();
    let newPage = Object.assign({}, this.state.pages)
    if (typeof newPage.pageid === 'undefined') {
      newPage.pageid = newPage.title;
      this
        .props
        .actions
        .addPage(newPage);
    } else {
      this
        .props
        .actions
        .updatePage(newPage);
    }
    this
      .context
      .router
      .push('/admin/website-pages-admin');
  }

  render() {
    return (
      <div>
        <NewPageForm
          onSave={this.savePages}
          pages={this.state.pages}
          onChange={this.onChange}/>
      </div>
    )
  }
}

addWebsitePage.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  return {pages: state.pages}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pagesAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addWebsitePage);