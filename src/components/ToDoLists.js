import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Row, Col} from 'react-flexbox-grid';
import {ToDoTableRow, TableCustom} from '../components/table/index' 
export const ToDoLists = (props) => {
    return (
        <div>

            <h2>To Do List</h2>
            <Row>
                <Col xs={8} sm={8} lg={8}>
                    <TextField
                    onChange={props.ontoDoListChange}
                    name="task"
                    value={props.selectedTask}
                    hintText="Hint Text"/>
                </Col>
                <Col xs={4} sm={4} lg={4}>
                    <RaisedButton onClick={props.submitToDoList} label="Submit" primary={true} />
                </Col>                
            </Row>
            <TableCustom
                headerItems={props.header}
                data={props.data}
                toDoForUpdate={props.toDoForUpdate}
                deleteToDo={props.deleteToDo}
                toggleCheckbox={props.toggleCheckbox}
                toDoItemModalOpen={props.toDoItemModalOpen}
                >
                <ToDoTableRow/>
            </TableCustom>
        </div>
    )
}
