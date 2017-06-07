import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {Row, Col} from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import * as dashboardAction from '../../../../src/actions/dashboardAction'
import {ToDoLists} from '../../../../src/components/ToDoLists'
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

const style = {
  padding: 20,
  textAlign: 'center',
  display: 'inline-block'
};

class dashboardMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: {
        task: '',
        status: false
      },
      selectedToDoItem: '',
      editToDoItem: '',
      header: [
        '', 'Task', ''
      ],
      openToDoModal: false
    }
    this.props.actions.loadToDo();
    this.ontoDoListChange = this
      .ontoDoListChange
      .bind(this);
    this.toDoItemModalOpen = this
      .toDoItemModalOpen
      .bind(this);
    this.toDoItemModalClose = this
      .toDoItemModalClose
      .bind(this);
    this.submitToDoList = this
      .submitToDoList
      .bind(this);
    this.toDoForUpdate = this
      .toDoForUpdate
      .bind(this);
    this.deleteToDo = this
      .deleteToDo
      .bind(this);
    this.onEditToDoListChange = this
      .onEditToDoListChange
      .bind(this);
    this.toggleCheckbox = this
      .toggleCheckbox
      .bind(this);

  }

  toDoItemModalOpen(toDotask) {
    this.setState({editToDoItem: toDotask});
    this.setState({selectedToDoItem: toDotask});
    this.setState({openToDoModal: true});
  };

  toDoItemModalClose() {
    this.setState({openToDoModal: false});
  };

  ontoDoListChange(e) {
    e.preventDefault();
    let newToDoList = Object.assign({}, this.state.toDoList)
    newToDoList[e.target.name] = e.target.value
    this.setState({toDoList: newToDoList});
  }

  onEditToDoListChange(e) {
    e.preventDefault();
    let newToDoList = Object.assign({}, {toDoList: this.state.editToDoItem})
    newToDoList = e.target.value
    this.setState({editToDoItem: newToDoList});
  }

  submitToDoList(e) {
    e.preventDefault();
    this
      .props
      .actions
      .toDoListSubmit(this.state.toDoList);
    let reset = {
      task: '',
      status: false
    }
    this.setState({toDoList: reset});
  }

  toDoForUpdate() {
    this
      .props
      .actions
      .toDoListUpdate({newValue: this.state.editToDoItem, oldValue: this.state.selectedToDoItem});
    this.toDoItemModalClose();
  }
  deleteToDo(deleteItem) {
    this
      .props
      .actions
      .toDoListDelete(deleteItem);

  }
  toggleCheckbox(checkboxState) {
    let updateCheckbox = Object.assign({}, checkboxState)
    updateCheckbox.status = !updateCheckbox.status
    this
      .props
      .actions
      .updateCheckboxStatus(updateCheckbox);
  }
  render() {
    const actions = [ < FlatButton label = "Cancel" primary = {
        true
      }
      onTouchTap = {
        this.toDoItemModalClose
      } />, < FlatButton label = "Submit" primary = {
        true
      }
      keyboardFocused = {
        true
      }
      onTouchTap = {
        this.toDoForUpdate
      } />
    ];
    return (
      <div>
        <h1>Dashboard</h1>
        <Row>
          <Col xs={12} sm={12} lg={4}>
            <Paper style={style} zDepth={1}>
              <Dialog
                title="Manage User"
                actions={actions}
                modal={false}
                open={this.state.openToDoModal}
                onRequestClose={this.toDoItemModalClose}>
                <TextField
                  onChange={this.onEditToDoListChange}
                  value={this.state.editToDoItem}
                  hintText="Hint Text"/>
              </Dialog>
              <ToDoLists
                header={this.state.header}
                deleteToDo={this.deleteToDo}
                toggleCheckbox={this.toggleCheckbox}
                toDoForUpdate={this.toDoForUpdate}
                ontoDoListChange={this.ontoDoListChange}
                submitToDoList={this.submitToDoList}
                toDoItemModalOpen={this.toDoItemModalOpen}
                data={this.props.toDoLists}
                selectedTask={this.state.toDoList.task}/>
            </Paper>
          </Col>
          <Col xs={12} sm={12} lg={4}>
            <Paper style={style} zDepth={1}>
              level1
            </Paper>
          </Col>
          <Col xs={12} sm={12} lg={4}>
            <Paper style={style} zDepth={1}>
              level2
            </Paper>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col xs={12} sm={12} lg={4}>
            <Paper style={style} zDepth={1}>
              ToDoLists
            </Paper>
          </Col>
          <Col xs={12} sm={12} lg={4}>
            <Paper style={style} zDepth={1}>
              level1
            </Paper>
          </Col>
          <Col xs={12} sm={12} lg={4}>
            <Paper style={style} zDepth={1}>
              level2
            </Paper>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {toDoLists: state.toDoLists}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dashboardAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(dashboardMain);
