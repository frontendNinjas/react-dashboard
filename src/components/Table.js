import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import userData from '../api/userData'

class TableComponent extends React.Component{	


  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: true,
      stripedRows: true,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      showCheckboxes: true,
    };
  }

  render(){
    return (
		 <Table>
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="4" style={{textAlign: 'center'}}>
                <h3>All User Detail</h3>
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The User ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Full Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The user">User Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
            </TableRow>
          </TableHeader>
		    <TableBody
	            displayRowCheckbox={this.state.showCheckboxes}
	            deselectOnClickaway={this.state.deselectOnClickaway}
	            showRowHover={this.state.showRowHover}
	            stripedRows={this.state.stripedRows}
			    >
	            {userData.map( (row, index) => (
	              <TableRow key={index} selected={row.selected}>
	                <TableRowColumn>{index}</TableRowColumn>
	                <TableRowColumn>{row.fullName}</TableRowColumn>
	                <TableRowColumn>{row.username}</TableRowColumn>
	                <TableRowColumn>{row.email}</TableRowColumn>
	              </TableRow>
	              ))}
		    </TableBody>
		  </Table>
    )
  }
}

export default TableComponent