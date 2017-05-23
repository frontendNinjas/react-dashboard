import React,{PropTypes} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as userActions from '../../../src/actions/userActions'
import UserForm from '../../../src/components/UserForm'

class manageUserPageAdmin extends React.Component{	

  constructor(props) {
    super(props);
    this.state = {
    	user: Object.assign({},this.props.user),
    	errors : {}
    }
    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  updateUserState(event){  	
  	const field = event.target.name;
  	let user = this.state.user;
  	user[field] = event.target.value;
    console.log('this.state.user', this.state.user)
  	return this.setState({user:user});
  }

  saveUser(event){
    console.log('this.state.user', this.state.user)
  	event.preventDefault();
  	this.props.actions.saveUser(this.state.user)
  	this.context.router.push('/admin/all-users');
  }

  render(){  	
    return (
    	 <div>
    	 	<UserForm onSave={this.saveUser} user={this.state.user} onChange={this.updateUserState} errors={this.state.errors}/>
    	 </div>
    )
  }
}

manageUserPageAdmin.contextTypes = {
	router: PropTypes.object
}

function getUserByUsername(users,username){
	const user = users.filter(user => user.username == username)
	if(user.length) return user[0];
	return null;
}

function mapStateToProps(state, ownProps){
	let user = {
		password: '',
		firstName: '',
		lastName: '',
		fullName:'',
		email: ''
	};	
	const username = ownProps.params.id
	if(username){
		user = getUserByUsername(state.users, username);
	}
  return {
    user: user
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions,dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(manageUserPageAdmin);