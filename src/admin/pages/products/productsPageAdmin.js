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
  }

  deleteProduct(productid) {
    console.log("product delete", productid);
    this
      .props
      .actions
      .deleteProduct(productid);
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
          />
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