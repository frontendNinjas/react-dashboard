import React from 'react';
import {TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

export const TableHeaderCustom = (props) => (
    <TableRow>
        {props
            .headerItems
            .map((headerItem, index) => {
                return <TableHeaderColumn key={index}>{headerItem}</TableHeaderColumn>
            })
}
    </TableRow>
)
