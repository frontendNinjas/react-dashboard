import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
 
export const UserTableRow = (props) => (
    <TableRow>
        <TableRowColumn>{props.rowdata.email}</TableRowColumn>
        <TableRowColumn><a className="userTable" id={props.rowdata.username} onClick={props.userForUpdate}>{props.rowdata.fullName}</a></TableRowColumn>
        <TableRowColumn>{props.rowdata.username}</TableRowColumn>
        <TableRowColumn>{props.rowdata.firstName}</TableRowColumn>
        <TableRowColumn><span id={props.rowdata.username} onClick={props.delete}>X</span></TableRowColumn>
    </TableRow>
)