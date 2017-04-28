import {combineReducers} from 'redux';
import products from '../reducers/productReducer';
import users from '../reducers/userReducer';
import toDoLists from '../reducers/toDoListReducer';

const rootReducer = combineReducers({
	products:products,
	toDoLists:toDoLists,
	users:users
});

export default rootReducer;