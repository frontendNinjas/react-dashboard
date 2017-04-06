import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import * as productActions from '../../src/actions/productActions'
import {bindActionCreators} from 'redux';

class Products extends React.Component{
	constructor(props,context) {
		super(props,context);
		
		this.state = {
			product: {title: ''}
		}
		this.onProductChange = this.onProductChange.bind(this)
		this.onClickSave = this.onClickSave.bind(this)
	}
	onProductChange(event){
		const product = this.state.product;
		product.title = event.target.value;
		this.setState({product: product});
	}
	onClickSave(){
		this.props.actions.createProduct(this.state.product);
	}
	productRow(product, index){
		return <div key={index}>{product.title}</div>
	}
	render(){
		return(
			<div>
				<h1>Products Page</h1>
				{this.props.products.map(this.productRow)}
				<h2>Add Product</h2>
				<input type="text" onChange={this.onProductChange} value={this.state.product.title} />
				<input type="submit" value="Save" onClick={this.onClickSave} />				
			</div>
		)
	}
}

function mapStateToProps(state, ownProps){
	return {
		products: state.products
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(productActions,dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);