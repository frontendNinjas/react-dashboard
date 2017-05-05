import React from 'react';
import {Link} from 'react-router';
import Input from '../../../src/components/Input';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Buttons from '../../../src/components/Buttons';
import ProductForm from '../../../src/components/ProductForm'

const style = {
	margin: 12,
};

class addNewUserPageAdmin extends React.Component{  
	render(){
		return (
		<div>
      <ProductForm />
		</div>  
		)
	}
}

export default addNewUserPageAdmin