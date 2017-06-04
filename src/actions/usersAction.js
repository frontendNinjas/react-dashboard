import userApi from '../Api/userApi'

export function addUserSuccess(users){
	return {type:'ADD_USER' ,users:users}
}

export function loadUsersSuccess(users){
	return {type:'LOAD_USERS', users:users}
}

export function updateUser(user){
	return {type:'UPDATE_USERS', user:user}
}

export function deleteUser(username){
	return {type:'DELETE_USER' ,username:username}

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