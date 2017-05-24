import React, {Component} from 'react';
import {UserTableRow, TableCustom} from '../../../components/table/index'

class UsersPageAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: [
                'Email', 'Full Name', 'User Name', 'Name', 'Delete'
            ],
            users: [
                {
                    username: 'harru',
                    password: 'letmein',
                    firstName: 'harminder',
                    lastName: 'kaur',
                    fullName: 'Harminder Kaur',
                    email: 'harminder.kaur@yahoo.com.au'
                }, {
                    username: 'pooji',
                    password: 'aloha',
                    firstName: 'Pooja',
                    lastName: 'Sharma',
                    fullName: 'Pooja Sharma',
                    email: 'pooja.sharma@hotmail.com'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <TableCustom headerItems={this.state.header} data={this.state.users}>
                    <UserTableRow/>
                </TableCustom>
            </div>
        );
    }
}

export default UsersPageAdmin;