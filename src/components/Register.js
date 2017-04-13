import React from 'react';
import Input from '../../src/components/Input';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Buttons from '../../src/components/Buttons';

class Register extends React.Component {

constructor(props) {
	super(props)
    this.state =({
    	title:"Register",
    	buttonLabel:"Create",
    	firstname:"First Name",
    	lastname:"Last Name",
    	emailaddress:"Email Address",
    	dob:"Date of Birth",
    	password:"Password",
    	confirmpassword:"Confirm Password"
    })
}

  handleClick() {
  		console.log('You have been successfully Register');
  }	

  render() {
    return (
    	<div className="register">
	    	<Card>
		    	<CardHeader title={this.state.title}/>
		    	<CardText>
		            <Input label={this.state.firstname} />
		            <Input label={this.state.lastname} />
		            <Input label={this.state.emailaddress} />
		            <Input label={this.state.dob} />
		            <Input label={this.state.password} />
		            <Input label={this.state.confirmpassword} />
		    	</CardText>
			    <CardActions>	
	      			<Buttons handleClick={this.handleClick} label={this.state.buttonLabel} />
	    		</CardActions>			    
	    	</Card>    
    	</div>
    );
  }
}

export default Register;