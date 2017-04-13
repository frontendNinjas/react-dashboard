import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Buttons extends React.Component{

  render(){
    return (
		<div>
           <RaisedButton onClick={this.props.handleClick} label={this.props.label} primary={true}/>
		</div>	
    )
  }
}

export default Buttons