import React from 'react';
import {Link} from 'react-router'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class TableComponent extends React.Component{	

  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: false,
      stripedRows: true,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: true,
      showCheckboxes: true,
    };
  }

  render(){
    return (
		 <Table multiSelectable={true} >
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
	            {this.props.rowData.map( (row, index) => (
	              <TableRow key={index} selected={row.selected}>
	                <TableRowColumn>{index}</TableRowColumn>
	                <TableRowColumn><Link to={'/admin/manage-user/' + row.username}>{row.fullName}</Link></TableRowColumn>
	                <TableRowColumn>{row.username}</TableRowColumn>
	                <TableRowColumn>{row.email}</TableRowColumn>
                  <TableRowColumn><span id={row.username} onClick={this.props.deleteRow}>X</span></TableRowColumn>
	              </TableRow>
	              ))}
		    </TableBody>
		  </Table>
    )
  }
}

export default TableComponent