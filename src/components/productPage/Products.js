import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';

const Products = (props) => {
  return (
    <Row>
      {props
        .productRow
        .map((row, index) => (
          <Col xs={3} key={index} className="bottomMargin">
            <Card>
              <CardHeader title={row.productname} subtitle={row.price}/>
              <CardMedia>
                <img src={row.image}/>
              </CardMedia>
              <CardText>Description: {row.bodyHtml}</CardText>
              <div className="productsButtons">
                <div className="button">
                  <Link to="/admin/add-new-products">
                    <RaisedButton label="Edit"/>
                  </Link>
                </div>
                <div className="button">
                  <RaisedButton
                    label="Delete"
                    onClick={() => props.deleteProduct(row.productid)}/>
                </div>
              </div>
            </Card>
          </Col>
        ))}
    </Row>
  )
}

export default Products