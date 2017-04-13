import React from 'react';
import TextField from 'material-ui/TextField';

class Input extends React.Component{

  render(){
    return (
		<div>
           <TextField hintText={this.props.placeholder} floatingLabelText={this.props.label}/>
		</div>	
    )
  }
}

export default Input