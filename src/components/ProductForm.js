import React from 'react';
import TextField from 'material-ui/TextField';

const ProductForm = ({user,onSave,onChange,loading,errors}) => {
	return (
		<form>
			<h1>Add Product</h1>
			<TextField floatingLabelText="Title" /><br />
			<TextField type="password" floatingLabelText="Price"  /><br />
			<TextField floatingLabelText="Sku" /><br />
			<TextField floatingLabelText="Description" /><br />
			<TextField floatingLabelText="Type"  /><br />
			<TextField floatingLabelText="Image"/><br />
			<input type="submit" disabled={loading} value={loading ? 'Saving...': 'save'} onClick={onSave}/>
		</form>
	)
}

export default ProductForm