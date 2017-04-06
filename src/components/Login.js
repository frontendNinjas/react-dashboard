import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends React.Component {

  handleClick() {
  		console.log('You have been successfully logged in...');
  		window.location = "http://localhost:8080/#/admin";  
  }	

  render() {
    return (
    	<div className="login">
	    	<Card>
		    	<CardHeader title="Login"/>
		    	<CardText>
		    	    <TextField hintText="@username" floatingLabelText="Username"/><br />
		    	    <TextField hintText="@password" floatingLabelText="Password" type="password"/>
		    	</CardText>
			    <CardActions>	
	      			<RaisedButton onClick={this.handleClick} label="Submit" primary={true}/>
	    		</CardActions>			    
	    	</Card>    
    	</div>
    );
  }
}

export default Login;