import React from 'react';
import Register from '../../../src/components/Register';

class addnewuserPageAdmin extends React.Component{	

constructor(props) {
	super(props)

	this.state = {
		title: "Add New User"
	}
}

  render(){
    return (
		<div>
           <Register title={this.state.title} />
		</div>	
    )
  }
}

export default addnewuserPageAdmin