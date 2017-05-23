import React from 'react';
import {Link} from 'react-router';
import Input from '../../../src/components/Input';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Buttons from '../../../src/components/Buttons';

const style = {
  margin: 12,
};

class addNewUserPageAdmin extends React.Component{	

constructor(props) {
	super(props)
    this.state =({
    	title:"Add New User",
      buttonLabel:"Create",
    	firstname:"First Name",
    	lastname:"Last Name",
    	emailaddress:"Email Address",
    	password:"Password",
    	confirmpassword:"Confirm Password",
      sendpassword:"Send Password",
      buttonLabel:"Create New User",
      backButton:"All User"
    })
}

  render(){
    return (
		<div>
		    <h3>{this.state.title}</h3>
		    <Link to="/admin/all-users">
		      <Buttons label={this.state.backButton} />
        </Link>
             <Input label={this.state.username} />
            <Input label={this.state.firstname} />
            <Input label={this.state.lastname} />
            <Input label={this.state.emailaddress} />
            <Input label={this.state.password} />
            <Input label={this.state.confirmpassword} />
            <ListItem
                 leftCheckbox={<Checkbox />}
                 secondaryText="Send this password to the new user by email" />
            <Buttons label={this.state.buttonLabel} />
		</div>	
    )
  }
}

export default addNewUserPageAdmin