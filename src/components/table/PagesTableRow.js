import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 0,
}

export const PagesTableRow = (props) => (       
    <TableRow>
        <TableRowColumn>
            {props.rowdata.title}
        </TableRowColumn>
        <TableRowColumn>{props.rowdata.author}</TableRowColumn>
        <TableRowColumn>{props.rowdata.date}</TableRowColumn>
        <TableRowColumn>{props.rowdata.pageTemplate}</TableRowColumn>
        <TableRowColumn>
            <div className="tableActions">
            <FlatButton label="Edit" primary={true}  /> 
            <FlatButton label="Clone" primary={true}  />
            <FlatButton onClick={() => props.deletePage(props.rowdata.author)} label="Trash" secondary={true}   />  
            </div>
        </TableRowColumn> 
    </TableRow>
)