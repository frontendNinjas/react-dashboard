import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ImageUpload from '../../../src/components/ImageUpload';
import {Grid, Row, Col} from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const style = {
	width: 350,
	margin: 20,
	textAlign: 'center',
	display: 'inline-block'
};

const style1 = {
	width: 1050,
	margin: 20,
	textAlign: 'center',
	display: 'inline-block'
};

const ProductForm = ({products, onSave, onChange}) => {
	return (
		<div>
			<form>
				<div className="titleWrapper">
					<h3 className="titleContainer">Add New Product</h3>
				</div>
				<div className="productContainer">
					<Row>
						<Col xs={8}>
							<Paper style={style1} zDepth={2}>
								<Row>
									<TextField
										className="marginLeft"
										fullWidth={true}
										name="productname"
										floatingLabelText="Enter Product name here"
										value={products.productname}
										onChange={onChange}/>
								</Row>
								<Row>
									<TextField
										className="marginLeft"
										fullWidth={true}
										name="bodyHtml"
										multiLine={true}
										rows={2}
										rowsMax={4}
										floatingLabelText="Porduct short description"
										value={products.bodyHtml}
										onChange={onChange}/>
								</Row>
								<br/>
								<Row>
									<h4 className="marginLeft">Product attributes</h4>
								</Row>
								<Row>
									<TextField
										className="marginLeft"
										fullWidth={true}
										name="price"
										floatingLabelText="Product price"
										value={products.price}
										onChange={onChange}/>
								</Row>
							</Paper>
						</Col>
						<Col xs={3}>
							<Paper style={style} zDepth={2}>
								<Row>
									<h4 className="marginLeft">Product Image</h4>
								</Row>
								<Row className="marginLeft">
									<ImageUpload name="image" value={products.image} onChange={onChange}/>
								</Row>
								<br/>
								<div className="greyBackground">
									<Row className="marginLeft">
										<FlatButton label="Move to Trash"/>
										<RaisedButton type="submit" label="Publish" primary={true} onClick={onSave}/>
									</Row>
								</div>
							</Paper>
						</Col>
					</Row>

				</div>
			</form>

		</div>
	)
}

export default ProductForm