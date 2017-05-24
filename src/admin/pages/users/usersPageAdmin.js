import React, {Component} from 'react';
import {UserTableRow, TableCustom} from '../../../components/table/index'
import UsersForm from '../../../components/forms/UsersForm'

class UsersPageAdmin extends Component {
    constructor(props) {
        super(props);
        this.updateInputField = this.updateInputField.bind(this);
        this.state = {
            header: [
                'Email', 'Full Name', 'User Name', 'Name', 'Delete'
            ],
            user: {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                fullName: '',
                email: ''

            },
            users: [
                {
                    username: 'harru',
                    password: 'letmein',
                    firstName: 'harminder',
                    lastName: 'kaur',
                    fullName: 'Harminder Kaur',
                    email: 'harminder.kaur@yahoo.com.au'
                }
            ]
        }
    }

    updateInputField(e){
        let newUser = this.state.user
        newUser[e.target.name] = e.target.value
        this.setState({user: newUser});
    }

    render() {
        return (
            <div>
                <UsersForm user={this.state.user} updateInputField={this.updateInputField}/>
                <hr/>
                <TableCustom headerItems={this.state.header} data={this.state.users}>
                    <UserTableRow/>
                </TableCustom>
            </div>
        );
    }
}

export default UsersPageAdmin;