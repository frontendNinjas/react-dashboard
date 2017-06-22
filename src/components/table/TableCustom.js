import React, {Component} from 'react';
import {TableHeaderCustom} from '../table/index'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

export class TableCustom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let header,
      tableBody
    if (this.props.headerItems.length > 0) {
      header = (
        <TableHeader>
          <TableHeaderCustom headerItems={this.props.headerItems}/>
        </TableHeader>
      )
    } else {
      header = (null)
    }
    if (this.props.data.length > 0) {return (
        <Table>
          {header}
          <TableBody>
            {this
              .props
              .data
              .map((d, index) => {
                return (React.cloneElement(this.props.children, {
                  rowdata: d,
                  key: index,
                  deleteUser: this.props.deleteUser,
                  userForUpdate: this.props.userForUpdate,
                  toDoForUpdate: this.props.toDoForUpdate,
                  deleteToDo: this.props.deleteToDo,
                  toDoItemModalOpen: this.props.toDoItemModalOpen,
                  toggleCheckbox: this.props.toggleCheckbox,
                  deletePage: this.props.deletePage,
                  editPage: this.props.editPage,
                }))
              })}

          </TableBody>
        </Table>
      )
    } else {
      return (null)
    }
  }
}

