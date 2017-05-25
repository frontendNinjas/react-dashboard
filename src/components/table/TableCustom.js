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
    this.state = {

    }
  }
  render() {
    let header
    if (this.props.headerItems.length > 0) {
      header = (
        <TableHeader>
          <TableHeaderCustom headerItems={this.props.headerItems}/>
        </TableHeader>
      )
    } else {
      header = (null)
    }
    return (
      <Table>
        {header}
        <TableBody>
          {this.props.data.map((d,index) => {
            return(   
                React.cloneElement(this.props.children,{rowdata:d,key:index}) 
           )
          })}
          
        </TableBody>
      </Table>
    );
  }
}

