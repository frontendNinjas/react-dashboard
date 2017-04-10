import React from 'react';
import TableComponent from '../../../src/components/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const style = {
  margin: 12,
};

class productsPageAdmin extends React.Component{	
  render(){
    return (
		<div>
		 <h3>Products</h3>
		 <hr />
		    <Link to="/admin/addnewproducts">
                <RaisedButton label="Add New Product" primary={true} style={style} />    
            </Link>
	       <TableComponent />
    	</div>	
    )
  }
}

export default productsPageAdmin