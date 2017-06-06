import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/action/delete';

const style = {
  margin: 0,
}

export const UserTableRow = (props) => (       
    <TableRow>
        <TableRowColumn>{props.rowdata.email}</TableRowColumn>
        <TableRowColumn>{props.rowdata.fullName}</TableRowColumn>
        <TableRowColumn>{props.rowdata.username}</TableRowColumn>
        <TableRowColumn>{props.rowdata.firstName}</TableRowColumn>
        <TableRowColumn>
            <FlatButton
            onClick={() => props.deleteUser(props.rowdata.username)}
            icon={<Delete />} style={style}/>
        </TableRowColumn>
        <TableRowColumn>
            <RaisedButton onClick={() => props.userForUpdate(props.rowdata.username)} label="Edit" primary={true} style={style} />
        </TableRowColumn>
    </TableRow>
)