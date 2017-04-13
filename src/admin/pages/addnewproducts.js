import React from 'react';
import Products from '../../../src/components/Products';
import Buttons from '../../../src/components/Buttons';
import {Link} from 'react-router';

class addNewProducts extends React.Component{	

  constructor(props) {
  super(props)
    this.state =({
      title:"Add New Product",
      buttonLabel:"All Products",
    })
}


  render(){
    return (
		<div>
		    <h3>{this.state.title}</h3>
		     <Link to="/admin/all-products">
              <Buttons label={this.state.buttonLabel} />
            </Link>
		    <hr/>
            <Products/>
		</div>	
    )
  }
}

export default addNewProducts