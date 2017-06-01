import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as productActions from '../../../../src/actions/productActions';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import Products from '../../../../src/components/Products';
import {Grid, Row, Col} from 'react-flexbox-grid';

class productsPageAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.deleteProductRow = this
      .deleteProductRow
      .bind(this);
  }

  deleteProductRow(event) {
    console.log("product page admin 1");
    event.preventDefault();
    var productToDelete = this
      .props
      .products
      .filter(function (product) {
        return product.productid == event
          .target
          .getAttribute('id');
      })
    this
      .props
      .actions
      .deleteProduct(productToDelete[0].productid);
  }

  render() {
    return (
      <Row>
        <Col><h3>All Products List</h3> </Col>
         <Col>
        <Products
          productRow={this.props.products}
          deleteProductRow={this.deleteProductRow}/>
         </Col>
      </Row>
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