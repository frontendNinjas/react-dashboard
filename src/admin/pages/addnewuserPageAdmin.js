import React from 'react';
import Register from '../../../src/components/Register';

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
           <Register title={this.state.title} />
		</div>	
    )
  }
}

export default addNewUserPageAdmin