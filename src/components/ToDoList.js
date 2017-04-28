import React from 'react';
import {Link} from 'react-router'
import TextField from 'material-ui/TextField';
import {blue500, greenA200} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Row, Col } from 'react-flexbox-grid';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

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
			toDoList: {title: ''},
			showResults: false
		}

		this.toDoListRow = this.toDoListRow.bind(this)
	}

	toDoListRow(toDoList, index, thisArg){
			return <div key={index} style={styles.block}>
				       <Row>
					        <Col xs={8} sm={8} lg={8}>
						        <Checkbox
							      label={toDoList.task}
							      checked={toDoList.done}
							      style={styles.checkbox}
							      onCheck={this.props.onCheckboxChange}
							    />
					        </Col>
					        <Col xs={4} sm={4} lg={4}>
				             <a onClick={() => this.props.deleteClick()}> <i className="material-icons" style={iconStyles} color={blue500}>cancel</i></a>
					        </Col>			        
				       </Row> 
		        </div>
    }

	render(){
		var todoList =
              <div className="todolistWrapper">
				<h5>TodoList</h5>
			  	<TextField 
			  	    onFocus={() => this.handleFocusChange()}
			  	    onChange={this.ontoDoListChange} 
			  	    value={this.state.toDoList.title} 
			  	    hintText="Hint Text" 
			  	    floatingLabelText="Todo"/>
			  	<RaisedButton 
			  	    type="submit" 
			  	    label="Add" 
			  	    primary={true} 
			  	    style={style} 
			  	    onClick={() => this.onClickSave()} />

	             <div className="todolistBottom">
		            {this.props.toDoLists.map(this.toDoListRow)}
				 </div>
	 		    </div>	
		return (todoList);
	}
}

export default ToDoList;