import React from 'react';
import Products from '../../../src/components/Products';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

const style = {
  margin: 12,
};


class addNewProducts extends React.Component{	
  render(){
    return (
		<div>
		    <h3>Add New Product</h3>
		     <Link to="/admin/all-products">
                <RaisedButton label="All Products" style={style} />
            </Link>
		    <hr/>
            <Products/>
		</div>	
    )
  }
}

export default addNewProducts