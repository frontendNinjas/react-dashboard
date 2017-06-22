import React, {Component} from 'react';
import {Link} from 'react-router';
import {PagesTableRow, TableCustom} from '../../../components/table/index'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as pagesAction from '../../../../src/actions/pagesAction'

class websitePagesAdmin extends React.Component {
  constructor(props) {
    super(props);
    this
      .props
      .actions
      .loadPages();
    this.state = {
      header: ['Title', 'Author', 'Date', 'Page Layout', '']
    }

    this.deletePage = this
      .deletePage
      .bind(this);
  }

  deletePage(id) {
    console.log("delete page", id)
  }

  render() {
    return (
      <div>
        <div className="titleWrapper">
          <h1 className="titleContainer">Pages</h1>
          <Link to="/admin/add-website" className="buttonContainer ">
            <RaisedButton label="Add New "/>
          </Link>
        </div>
        <div className="productContainer">
          <TableCustom
            headerItems={this.state.header}
            data={this.props.pages}
            deletePage={this.deletePage}>
            <PagesTableRow/>
          </TableCustom>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {pages: state.pages}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pagesAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(websitePagesAdmin);
