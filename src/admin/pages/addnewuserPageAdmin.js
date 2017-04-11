import React from 'react';
import Register from '../../../src/components/Register';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const style = {
  margin: 12,
};

class addNewUserPageAdmin extends React.Component{	

constructor(props) {
	super(props)

	this.state = {
		title: "Add New User"
	}
}

  render(){
    return (
		<div>
		   <h3>Add New User</h3>
		    <Link to="/admin/all-users">
		      <RaisedButton label="All User" style={style} /> 
            </Link>
           <Register title={this.state.title} />
		</div>	
    )
  }
}

export default addNewUserPageAdmin