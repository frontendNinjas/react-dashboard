import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

class Login extends React.Component {
  render() {
    return (
    	<div>
    	    <TextField hintText="@username" floatingLabelText="Floating Label Text"/><br />
    	    <TextField hintText="@password" floatingLabelText="Password" type="password"/>
    	</div>
    );
  }
}

export default Login;