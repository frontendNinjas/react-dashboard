import React from 'react';
import {Link} from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Products extends React.Component{
	render(){
		return(
         <Grid>
					  {this.props.productRow.map((row, index) => (
              <Row key={index}>
               <Col xs={2}>
                 <img src={row.image} />
               </Col>
               <Col xs={8}>
                 <div>{row.title}</div>
                 <div>Price: {row.price}</div>
                 <div>SKU: {row.sku}</div>
                 <div>Description: {row.bodyHtml}</div>
               </Col>
              </Row>
					  ))}
          </Grid>
		)
	}
}


export default Products