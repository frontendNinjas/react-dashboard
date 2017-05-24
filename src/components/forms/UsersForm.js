import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const UsersForm = (props) => {
    return (
        <div>
            <form>
                <h1>Manage User</h1>
                <TextField name="firstName" floatingLabelText="First Name" value={props.user.firstName} onChange={props.updateInputField}/><br/>
                <TextField name="lastName" floatingLabelText="Last Name" value={props.user.lastName} onChange={props.updateInputField}/><br/>
                <TextField
                    name="password"
                    type="password"
                    floatingLabelText="Password"
                    value={props.user.password} onChange={props.updateInputField}/><br/>
                <TextField name="fullName" floatingLabelText="Full Name" value={props.user.fullName} onChange={props.updateInputField}/><br/>
                <TextField name="email" floatingLabelText="Email" value={props.user.email} onChange={props.updateInputField}/><br/><br/>
                <RaisedButton type="submit" label="Submit" primary={true}/>
            </form>
        </div>
    )
}

export default UsersForm