export default function toDoListReducer(state=[], action){
	switch(action.type){
		case 'LOAD_TO_DO_List_SUCCESS': 
			return action.toDoLists;
		case 'UPDATE_USERS_SUCCESS': 
			return [...state.filter(user => user.username !== action.user.username),Object.assign({},action.user)];
		case 'CREATE_USERS_SUCCESS': 
			return [...state, Object.assign({},action.user)];	
		case 'LOAD_USERS_AFTER_DELETE_SUCCESS': 
			return Object.assign([], action.users);
		default:
			return state;
	}
}