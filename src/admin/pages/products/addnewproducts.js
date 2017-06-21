import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import Input from '../../../../src/components/Input';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Buttons from '../../../../src/components/Buttons';
import ProductForm from '../../../../src/components/productPage/ProductForm'
import * as productActions from '../../../../src/actions/productActions'

const style = {
  margin: 12
};

class addNewProducts extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this
      .onChange
      .bind(this);
    this.saveProduct = this
      .saveProduct
      .bind(this);
		this.state = {
    	products: Object.assign({},this.props.products),
    	errors : {}
    }
  }

  onChange(e) {
    e.preventDefault();
    const field = e.target.name;
    let newProduct = Object.assign({}, this.state.products)
    newProduct[field] = e.target.value
    return this.setState({products: newProduct});
  }

  saveProduct(e) {
    e.preventDefault();
    let newProduct = Object.assign({}, this.state.products)
    if (typeof newProduct.productid === 'undefined') {
      newProduct.productid = newProduct.productCode;
      this
        .props
        .actions
        .createProductsSuccess(newProduct);
    } else {
      this
        .props
        .actions
        .updateProducts(this.state.products);
    }
    this
      .context
      .router
      .push('/admin/all-products');
  }

  render() {
    return (
      <div>
        <ProductForm
          onSave={this.saveProduct}
          products={this.state.products}
          onChange={this.onChange}/>
      </div>
    )
  }
}

addNewProducts.contextTypes = {
  router: PropTypes.object
}

function getProductsByProductname(products, productname) {
  const product = products.filter(product => product.productname == productname)
  if (product.length) 
    return product[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  let products = {
    productname: '',
    price: '',
    bodyHtml: '',
    image: '',
    productCode: ''
  };
  const productname = ownProps.params.id
  if (productname) {
    products = getProductsByProductname(state.products, productname);
  }
  return {products: products}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addNewProducts);