import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Register extends React.Component {

constructor(props) {
	super(props)
	this.props = props;

	props = {
		title: "Register"
	  }
}

  handleClick() {
  		console.log('You have been successfully Register');
  }	

  render() {
    return (
    	<div className="register">
	    	<Card>
		    	<CardHeader title={this.props.title}/>
		    	<CardText>
		    	    <TextField hintText="@first name" floatingLabelText="First Name"/><br />
		    	    <TextField hintText="@last name" floatingLabelText="Last Name"/><br />
		    	    <TextField hintText="@email address" floatingLabelText="Email Address"/><br />
		    	    <TextField hintText="@DOB" floatingLabelText="Date of Birth"/><br />
		    	    <TextField hintText="@passord" floatingLabelText="Password" type="password"/><br />
		    	    <TextField hintText="@confirm password" floatingLabelText="Confirm Password" type="password"/><br />
		    	</CardText>
			    <CardActions>	
	      			<RaisedButton onClick={this.handleClick} label="Create" primary={true}/>
	    		</CardActions>			    
	    	</Card>    
    	</div>
    );
  }
}

export default Register;