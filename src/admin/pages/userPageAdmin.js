import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import * as userActions from '../../../src/actions/userActions'
import {bindActionCreators} from 'redux';
import Buttons from '../../../src/components/Buttons';
import TableComponent from '../../../src/components/Table';


class userPageAdmin extends React.Component{	

  constructor(props) {    
    super(props);
    this.deleteRow = this.deleteRow.bind(this);
  }

  deleteRow(event){
    event.preventDefault();    
    var userToDelete = this.props.users.filter(function(user){
      return user.username == event.target.getAttribute('id'); 
    })
    this.props.actions.deleteUser(userToDelete[0].username);
  }

  render(){
    return (
    	 <div>
    	  <h3>All User List</h3>
    	      	  <hr/>
    	    <Link to="/admin/manage-user">
                <Buttons label="add for now" />     
            </Link>
            <br/>          
            <TableComponent rowData={this.props.users} deleteRow={this.deleteRow}/>
    	 </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions,dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(userPageAdmin);