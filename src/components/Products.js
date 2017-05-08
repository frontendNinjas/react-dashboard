import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';

class Products extends React.Component{
	render(){
		return(
         <Grid>
					  {this.props.productRow.map((row, index) => (
              <Row key={index}>
               <Col xs={3}>
                 <img src={row.image} />
               </Col>
               <Col xs={7}>
                 <div>{row.title}</div>
                 <div>Price: {row.price}</div>
                 <br />
                 <div>Description: {row.bodyHtml}</div>
               </Col>
                <Col xs={2}>
                 <RaisedButton onClick={this.props.deleteProduct} label="Remove Product" primary={true} />
               </Col>
              </Row>
					  ))}
          </Grid>
		)
	}
}


export default Products