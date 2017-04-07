import React from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import * as productActions from '../../src/actions/productActions'
import {bindActionCreators} from 'redux';
import TextField from 'material-ui/TextField';
import {blue500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
  marginRight: 24,
};

const EditIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </SvgIcon>
);


class ToDoList extends React.Component{	
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
		return <div key={index}><EditIcon style={iconStyles} color={blue500} hoverColor={greenA200} /> {product.title}</div>
	}
	render(){
		return(
				  <div className="todolistWrapper">
					  <h5>TodoList</h5>
				  	<TextField onChange={this.onProductChange} value={this.state.product.title} hintText="Hint Text" floatingLabelText="Todo"/>
				  	<input type="submit" value="Add" onClick={this.onClickSave} />		
					   	<div className="todolistBottom">
					      {this.props.products.map(this.productRow)}
				    	</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);