import React from 'react';
import TableComponent from '../../../src/components/Table';
import {Link} from 'react-router';
import Buttons from '../../../src/components/Buttons';

class productsPageAdmin extends React.Component{	

   constructor(props) {
    super(props);
      this.state =({
        title:"Products",
        buttonLabel:"Add New Product"
      })
  }

  render(){
    return (
		<div>
		 <h3>{this.state.title}</h3>
		 <hr />
		    <Link to="/admin/add-new-products">
            <Buttons label={this.state.buttonLabel} />   
         </Link>
         <br/>
	       <TableComponent />
    	</div>	
    )
  }
}

export default productsPageAdmin