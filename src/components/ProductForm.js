import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ImageUpload from '../../src/components/ImageUpload';

const ProductForm = ({onSave,onChange}) => {
	return (
		<form>
			<h1>Add Product</h1>
			<TextField floatingLabelText="Title" /><br />
			<TextField type="password" floatingLabelText="Price"  /><br />
			<TextField floatingLabelText="Description" /><br /><br />
            <ImageUpload />
			<br /><br />
			<RaisedButton label="Submit" primary={true}/>
		</form>
	)
}

export default ProductForm