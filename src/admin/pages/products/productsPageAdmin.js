import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as productActions from '../../../../src/actions/productActions';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import Products from '../../../../src/components/productPage/Products';
import {Grid, Row, Col} from 'react-flexbox-grid';

class productsPageAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.deleteProduct = this
      .deleteProduct
      .bind(this);
    this.editbutton = this
      .editbutton
      .bind(this);
  }

  deleteProduct(productid) {
    console.log("product delete", productid);
    this
      .props
      .actions
      .deleteProduct(productid);
  }

  editbutton(id) {
    console.log("edit", id)

    // const field = event.target.name; let products = this.state.products;
    // products[field] = event.target.value; return
    // this.setState({products:products}); console.log("edit button click") var
    // updatedProducts = Object.assign([], this.props.products); var foundIndex =
    // updatedProducts.findIndex(x => x.productid == id);
    // updatedProducts[foundIndex]; this.setState({product:
    // updatedProducts[foundIndex]});
  }

  render() {
    return (
      <div>
        <div className="titleWrapper">
          <h1 className="titleContainer">Products</h1>
          <Link to="/admin/add-new-products" className="buttonContainer ">
            <RaisedButton label="Add New Product"/>
          </Link>
        </div>
        <div className="productContainer">
          <Products
            productRow={this.props.products}
            deleteProduct={this.deleteProduct}
            editbutton={this.editbutton}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {products: state.products}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(productsPageAdmin);