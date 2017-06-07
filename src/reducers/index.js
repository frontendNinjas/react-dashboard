import {combineReducers} from 'redux';
import products from '../reducers/productReducer';
import users from '../reducers/usersReducer';
import toDoList from '../reducers/toDoListReducer';

const rootReducer = combineReducers({
	products:products,
	users:users,
	toDoLists: toDoList
});

export default rootReducer;