import React from 'react';
import Products from '../../../src/components/Products';

class addNewProducts extends React.Component{	
  render(){
    return (
		<div>
		    <h3>Add New Product</h3>
		    <hr/>
            <Products/>
		</div>	
    )
  }
}

export default addNewProducts