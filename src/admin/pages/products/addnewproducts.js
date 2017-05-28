import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import Input from '../../../../src/components/Input';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Buttons from '../../../../src/components/Buttons';
import ProductForm from '../../../../src/components/ProductForm'
import * as productActions from '../../../../src/actions/productActions'
 
const style = {
	margin: 12,
};

class addNewProducts extends React.Component{  

	constructor(props) {
		super(props);
		this.state = {
    	products: Object.assign({},this.props.products),
    	errors : {}
    }
    this.updateProductState = this.updateProductState.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
  }

  updateProductState(event){
    const field = event.target.name;
    let products = this.state.products;
    products[field] = event.target.value;
    return this.setState({products:products});
  }

	saveProduct(event){
    event.preventDefault();
  	this.props.actions.saveProduct(this.state.products);
  	this.context.router.push('/admin/all-products');
  } 

	render(){
		return (
		<div>
          <ProductForm onSave={this.saveProduct} products={this.state.products} onChange={this.updateProductState} />
		</div>  
		)
	}
}

addNewProducts.contextTypes = {
  router: PropTypes.object
}

function getProductsByProductname(products,productname){
  const product = products.filter(product => product.productname == productname)
  if(product.length) return product[0];
  return null;
}

function mapStateToProps(state, ownProps){
  let products = {
    productname: '',
    price: '',
    bodyHtml: '',
    image:''
  };  
  const productname = ownProps.params.id
  if(productname){
    products = getProductsByProductname(state.products, productname);
  }
  return {
    products: products
  }
}


function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(productActions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addNewProducts);