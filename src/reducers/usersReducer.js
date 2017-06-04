
export default function usersReducer(state=[], action){
	if(action.type === 'ADD_USER'){
		return [...state, Object.assign({},action.users)];	
	}else if(action.type === 'UPDATE_USERS'){
			var updatedUsers = Object.assign([], state)
			var foundIndex = updatedUsers.findIndex(x => x.username == action.user.username);
			action.user.username = action.user.email;
			updatedUsers[foundIndex] = action.user
			return updatedUsers;
	}else if(action.type === 'DELETE_USER'){
		let removedArray = state.filter(function(n){
			return n.username !== action.username;
		})
		console.log('removedArray', removedArray);
		return removedArray
	}else if(action.type === 'LOAD_USERS'){
		return action.users;
	}else{
		return [...state]
	}
}

