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

class Products extends React.Component {
  render() {
    return (
      <Row>
        {this
          .props
          .productRow
          .map((row, index) => (
            <Col xs={3} key={index}>
              <Card>
                <CardTitle title={row.productname} subtitle={row.price}/>
                <CardMedia>
                  <img src={row.image}/>
                </CardMedia>
                <CardText>Description: {row.bodyHtml}</CardText>
                <CardHeader>


                  <Link to="/admin/add-new-products">
                      <RaisedButton label="Add" primary={true}/>
                      <RaisedButton label="Edit" secondary={true}/>
                  </Link>
                </CardHeader>
              </Card>
            </Col>
          ))}
      </Row>
    )
  }
}

export default Products