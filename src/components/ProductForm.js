import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ImageUpload from '../../src/components/ImageUpload';

const ProductForm = ({products,onSave,onChange}) => {
	return (
		<form>
			<h1>Add Product</h1>
			<TextField name="productname" floatingLabelText="Title" value={products.productname} onChange={onChange} /><br />
			<TextField name="price" floatingLabelText="Price" value={products.price} onChange={onChange}  /><br />
			<TextField name="bodyHtml" floatingLabelText="Description" value={products.bodyHtml} onChange={onChange} /><br /><br />
            <ImageUpload name="image" value={products.image} onChange={onChange} />
			<br /><br />
			<RaisedButton type="submit" label="Submit" primary={true} onClick={onSave}/>
		</form>
	)
}

export default ProductForm