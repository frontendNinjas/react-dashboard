import React from 'react';
import MenuItem from 'material-ui/MenuItem';

class RightContainer extends React.Component{	
  render(){
    return (
		<div className="page-content-wrapper" onClick={this.props.handleClick}>
            {this.props.body}
		</div>	
    )
  }
}

export default RightContainer