import userApi from '../Api/userApi'

export function loadUsersSuccess(users){
	return {type:'LOAD_USERS_SUCCESS' ,users:users}
}

export function updateUsersSuccess(user){
	return {type:'UPDATE_USERS_SUCCESS' ,user:user}
}

export function createUsersSuccess(user){
	return {type:'CREATE_USERS_SUCCESS' ,user:user}
}

export function loadUsersAfterDeleteSuccess(users){
	return {type:'LOAD_USERS_AFTER_DELETE_SUCCESS' ,users:users}

}

export function loadUsers(users){
	return function(dispatch){
		return userApi.getAllusers().then(users => {
			dispatch(loadUsersSuccess(users));
		}).catch(error => {
			throw(error);
		})
	}
}
export function saveUser(user){
	return function(dispatch){
		return userApi.saveUser(user).then(savedUser => {
			user.username ? dispatch(updateUsersSuccess(savedUser)) : dispatch(createUsersSuccess(savedUser));
		}).catch(error => {
			throw(error);
		})
	}
}
export function deleteUser(username){
	return function(dispatch){
		return userApi.deleteUser(username).then(deletedUser => {
			console.log('deletedUser', deletedUser)
			dispatch(loadUsersAfterDeleteSuccess(deletedUser));
		}).catch(error => {
			throw(error);
		})
	}
}