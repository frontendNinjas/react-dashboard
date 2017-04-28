import toDoApi from '../Api/toDoApi'

export function loadToDoListSuccess(toDoLists){
	return {type:'LOAD_TO_DO_List_SUCCESS' ,toDoLists:toDoLists}
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

export function loadToDoList(lists){
	return function(dispatch){
		return toDoApi.getAllToDoData().then(lists => {
			dispatch(loadToDoListSuccess(lists));
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
			dispatch(loadUsersAfterDeleteSuccess(deletedUser));
		}).catch(error => {
			throw(error);
		})
	}
}