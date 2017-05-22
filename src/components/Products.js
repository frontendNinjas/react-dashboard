import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';

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
                 <div>{row.productname}</div>
                 <div>Price: {row.price}</div>
                 <br />
                 <div>Description: {row.bodyHtml}</div>
               </Col>
                <Col xs={1}>
                 <div id={row.productid} className="deleteIcon" onClick={this.props.deleteProductRow}>X</div>
               </Col>
              </Row>
					  ))}
          </Grid>
		)
	}
}


export default Products