import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import ToDoList from '../../../src/components/ToDoList';
import * as toDoListActions from '../../../src/actions/toDoListActions'

class dashboardMain extends React.Component{  

  constructor(props) {
    super(props);
    this.editClick = this.editClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
  }

  editClick(){
    console.log('edit click')
  }

  deleteClick(){
    console.log('delete click')
  }

  render(){
    return (
       <div>
        <h3>Dashboard</h3>
          <div className="col-md-4">
              <ToDoList editClick={this.editClick} deleteClick={this.deleteClick} toDoLists={this.props.toDoLists} />
          </div>       
       </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  console.log('state', state)
  return {
    toDoLists: state.toDoLists
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(toDoListActions,dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(dashboardMain);