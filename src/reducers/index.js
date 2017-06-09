import {combineReducers} from 'redux';
import products from '../reducers/productReducer';
import users from '../reducers/usersReducer';
import themes from '../reducers/themesReducer';
import toDoList from '../reducers/toDoListReducer';

const rootReducer = combineReducers({
	products:products,
	users:users,
	themes:themes,
	toDoLists: toDoList
});


export default rootReducer;