import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import ToDoList from '../../../src/components/ToDoList';
import { Row, Col } from 'react-flexbox-grid';

class dashboardMain extends React.Component{  

  constructor(props) {
    super(props);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
  }

  deleteClick(){
    console.log('delete click')
  }

  onCheckboxChange(){
    console.log('onCheckboxChange click')
    
  }

  render(){
    return (
       <div>
       <h3>Dashboard</h3>
       <Row>
        <Col xs={12} sm={12} lg={4}>
          <ToDoList onCheckboxChange={this.onCheckboxChange} deleteClick={this.deleteClick} toDoLists={this.props.toDoLists} />
        </Col>
        <Col xs={12} sm={12} lg={4}>
          level1
        </Col>
        <Col xs={12} sm={12} lg={4}>
          level2
        </Col>
      </Row>      
       </div>
    )
  }
}
