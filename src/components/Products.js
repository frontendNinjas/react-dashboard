import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';

class Products extends React.Component {
  render() {
    return (
      <Grid>
        {this
          .props
          .productRow
          .map((row, index) => (
            <Row key={index} className="productsRow">
              <Col xs={2}>
                <img className="productImages" src={row.image}/>
              </Col>
              <Col xs={7}>
                <div>{row.productname}</div>
                <div>Price: {row.price}</div>
                <br/>
                <div>Description: {row.bodyHtml}</div>
              </Col>
              <Col xs={3}>
                <span
                  id={row.productid}
                  className="deleteIcon"
                  onClick={this.props.deleteProductRow}>Delete</span>
                &nbsp;/&nbsp;
                <span
                  id={row.productid}
                  className="deleteIcon"
                  onClick={this.props.deleteProductRow}>
                  <Link to={'/admin/add-new-products/' + row.productname}>Edit</Link>
                </span>
              </Col>
            </Row>
          ))}
      </Grid>
    )
  }
}

export default Products