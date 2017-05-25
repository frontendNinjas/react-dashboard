import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';

export const UserTableRow = (props) => ((
    <TableRow>
        <TableRowColumn>{props.rowdata.email}</TableRowColumn>
        <TableRowColumn>{props.rowdata.fullName}</TableRowColumn>
        <TableRowColumn>{props.rowdata.username}</TableRowColumn>
        <TableRowColumn>{props.rowdata.firstName}</TableRowColumn>
        <TableRowColumn>X</TableRowColumn>
    </TableRow>
))