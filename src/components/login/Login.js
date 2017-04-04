import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends React.Component {
  render() {
    return (
    	<div>
	    	<Card>
		    	<CardHeader title="Login"/>
		    	<CardText>
		    	    <TextField hintText="@username" floatingLabelText="Username"/><br />
		    	    <TextField hintText="@password" floatingLabelText="Password" type="password"/>
		    	</CardText>
			    <CardActions>	
	      			<RaisedButton label="Submit" primary={true}/>
	    		</CardActions>			    
	    	</Card>    
    	</div>
    );
  }
}

export default Login;