import React, {Component} from 'react';
import {UserTableRow, TableCustom} from '../../../components/table/index'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import UsersForm from '../../../components/forms/UsersForm'
import * as usersAction from '../../../../src/actions/usersAction'

class UsersPageAdmin extends Component {
    constructor(props) {
        super(props);
        this.updateInputField = this
            .updateInputField
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
        this.deleteUser = this
            .deleteUser
            .bind(this);
        this.handleOpen = this
            .handleOpen
            .bind(this);
        this.handleClose = this
            .handleClose
            .bind(this);
        this.userForUpdate = this
            .userForUpdate
            .bind(this);

        this
            .props
            .actions
            .loadUsers();
        this.state = {
            header: [
                'Email', 'Full Name', 'User Name', 'Name', 'Delete'
            ],
            open: false,
            user: {
                password: '',
                firstName: '',
                lastName: '',
                fullName: '',
                email: ''

            }
        }
    }
    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };
    updateInputField(e) {
        e.preventDefault();
        let newUser = Object.assign({}, this.state.user)
        newUser[e.target.name] = e.target.value
        this.setState({user: newUser});
    }

    onSubmit(e) {
        e.preventDefault();
        let newUser = Object.assign({}, this.state.user)
        if (typeof newUser.username === 'undefined') {
            newUser.username = newUser.email;
            this
                .props
                .actions
                .addUserSuccess(newUser);
        } else {
            this
                .props
                .actions
                .updateUser(newUser);
        }
        var reset = {
            password: '',
            firstName: '',
            lastName: '',
            fullName: '',
            email: ''

        }
        this.setState({user: reset});
        this.setState({open: false});
    }

    deleteUser(e) {
        e.preventDefault();
        this
            .props
            .actions
            .deleteUser(e.target.getAttribute('id'));

    }
    userForUpdate(e) {
        e.preventDefault();
        var updatedUsers = Object.assign([], this.props.users)
        var foundIndex = updatedUsers.findIndex(x => x.username == e.target.getAttribute('id'));
        updatedUsers[foundIndex]
        this.setState({user: updatedUsers[foundIndex]});
        this.setState({open: true});
    }
    render() {
        const actions = [ < FlatButton label = "Cancel" primary = {
                true
            }
            onTouchTap = {
                this.handleClose
            } />, < FlatButton label = "Submit" primary = {
                true
            }
            keyboardFocused = {
                true
            }
            onTouchTap = {
                this.onSubmit
            } />
        ];
        return (
            <div>
                <RaisedButton label="Add / Edit User" onTouchTap={this.handleOpen}/>
                <p>Click on the Full Name to edit individual record of the user</p>
                <Dialog
                    title="Manage User"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    <UsersForm
                        user={this.state.user}
                        formSubmit={this.onSubmit}
                        updateInputField={this.updateInputField}/>
                </Dialog>
                <TableCustom
                    headerItems={this.state.header}
                    data={this.props.users}
                    userForUpdate={this.userForUpdate}
                    deleteUser={this.deleteUser}>
                    <UserTableRow/>
                </TableCustom>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {users: state.users}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(usersAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageAdmin);
