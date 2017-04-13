import React from 'react';
import Input from '../../src/components/Input';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Buttons from '../../src/components/Buttons';

class Login extends React.Component {
 
 constructor(props) {
    super(props);
      this.state =({
        title:"Login",
        buttonLabel:"Submit",
      	username:"Username",
      	password:"password"
      })
  }

  handleClick() {
  		console.log('You have been successfully logged in...');
  		window.location = "http://localhost:8080/#/admin";  
  }	

  render() {
    return (
    	<div className="login">
	    	<Card>
		    	<CardHeader title={this.state.title}/>
		    	<CardText>
                   <Input label={this.state.username} />
                    <Input label={this.state.password} />
		    	</CardText>
			    <CardActions>	
              <Buttons handleClick={this.handleClick} label={this.state.buttonLabel} />
	    		</CardActions>			    
	    	</Card>    
    	</div>
    );
  }
}

export default Login;