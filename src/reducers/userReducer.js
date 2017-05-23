export default function userReducer(state=[], action){
	switch(action.type){
		case 'LOAD_USERS_SUCCESS': 
			return action.users;
		case 'UPDATE_USERS_SUCCESS': 
			var updatedUsers = Object.assign([], state)
			var foundIndex = updatedUsers.findIndex(x => x.username == action.user.username);
			updatedUsers[foundIndex] = action.user
			return updatedUsers;
		case 'CREATE_USERS_SUCCESS': 
			return [...state, Object.assign({},action.user)];	
		case 'LOAD_USERS_AFTER_DELETE_SUCCESS': 
		console.log(Object.assign([], action.users))
			return Object.assign([], action.users);
		default:
			return state;
	}
}