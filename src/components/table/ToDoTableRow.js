import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Delete from 'material-ui/svg-icons/action/delete';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const style = {
    margin: 0,
    checkbox: {
        marginBottom: 16
    },
    doneTaskStyle: {
        textDecoration: 'line-through'
    },
    taskStyle:{
        textDecoration: 'none'
    }
}

export const ToDoTableRow = (props) => (
    <TableRow>
        <TableRowColumn>
            <Checkbox
                checkedIcon={< ActionFavorite />}
                checked={props.rowdata.status}
                onClick={() => props.toggleCheckbox(props.rowdata)}
                uncheckedIcon={< ActionFavoriteBorder />}
                style={style.checkbox}/>

        </TableRowColumn>
        <TableRowColumn>
            <a style={props.rowdata.status ? style.doneTaskStyle : style.taskStyle} onClick={() => props.toDoItemModalOpen(props.rowdata.task)}>{props.rowdata.task}</a>
        </TableRowColumn>
        <TableRowColumn>
            <FlatButton
                onClick={() => props.deleteToDo(props.rowdata)}
                icon={< Delete />}
                style={style}/>
        </TableRowColumn>
    </TableRow>
)