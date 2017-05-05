import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as productActions from '../../../src/actions/productActions';
import {bindActionCreators} from 'redux';
import Buttons from '../../../src/components/Buttons';
import Products from '../../../src/components/Products';

class productsPageAdmin extends React.Component{	

 constructor(props) {
    super(props);
      this.state =({
        buttonLabel:"Add Product",
      })
  }

  render(){
    return (
		 <div>
       <h3>All Products List</h3>
       <hr/>
         <Link to="/admin/add-new-products">
          <Buttons label={this.state.buttonLabel} />     
          </Link>
            <br/> 
       <Products productRow={this.props.products} />
    	</div>	
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(productActions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(productsPageAdmin);