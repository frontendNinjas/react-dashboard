import React from 'react';
import TextField from 'material-ui/TextField';

const UserForm = ({user,onSave,onChange,loading,errors}) => {
	return (
		<form>
			<h1>Manage User</h1>
			<TextField name="firstName" floatingLabelText="First Name" value={user.firstName} onChange={onChange} errorText={errors.firstName}/><br />
			<TextField name="lastName" floatingLabelText="Last Name" value={user.lastName} onChange={onChange} errorText={errors.lastName}/><br />
			<TextField name="password" type="password" floatingLabelText="Password" value={user.password} onChange={onChange} errorText={errors.password}/><br />
			<TextField name="fullName" floatingLabelText="Full Name" value={user.fullName} onChange={onChange} errorText={errors.fullName}/><br />
			<TextField name="email" floatingLabelText="Email" value={user.email} onChange={onChange} errorText={errors.email}/><br /><br />
			<input type="submit" disabled={loading} value={loading ? 'Saving...': 'save'} onClick={onSave}/>
		</form>
	)
}

export default UserForm