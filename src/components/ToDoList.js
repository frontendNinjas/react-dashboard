import React from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'
import * as productActions from '../../src/actions/productActions'
import {bindActionCreators} from 'redux';
import TextField from 'material-ui/TextField';
import {blue500, greenA200} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};


const iconStyles = {
  marginRight: 24,
};


class ToDoList extends React.Component{	
  
  constructor(props,context) {
		super(props,context);
		
		this.state = {
			product: {title: ''},
			showResults: false
		}

		this.onProductChange = this.onProductChange.bind(this)
		this.productRow = this.productRow.bind(this)
	}
	
	onProductChange(event){
		const product = this.state.product;
		product.title = event.target.value;
		this.setState({product: product});
	}

	onClickSave(){
		this.setState({ showResults: true });
		this.props.actions.createProduct(this.state.product);
	}

    handleFocusChange(){
        this.setState ({
        	product: {title: ''}
        })
    }

    handleClearList(){
    	console.log("ssjfjsdfdjsfjs")
    }

	productRow(product, index, thisArg){
			return <div key={index}>
			         <i className="material-icons" style={iconStyles} color={blue500}>mode_edit</i>
		              {product.title}
		             <a onClick={() => this.handleClearList()}> <i className="material-icons" style={iconStyles} color={blue500}>cancel</i></a>
		            </div>
    }

	render(){
		var todoList =
              <div className="todolistWrapper">
				<h5>TodoList</h5>
			  	<TextField 
			  	    onFocus={() => this.handleFocusChange()}
			  	    onChange={this.onProductChange} 
			  	    value={this.state.product.title} 
			  	    hintText="Hint Text" 
			  	    floatingLabelText="Todo"/>
			  	<RaisedButton 
			  	    type="submit" 
			  	    label="Add" 
			  	    primary={true} 
			  	    style={style} 
			  	    onClick={() => this.onClickSave()} />

	             <div className="todolistBottom">
		            {this.props.products.map(this.productRow)}
				 </div>
	 		    </div>	
		return (todoList);
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