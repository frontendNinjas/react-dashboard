import {combineReducers} from 'redux';
import products from '../reducers/productReducer';
import users from '../reducers/usersReducer';
import {themes, defaultTheme} from '../reducers/themesReducer';
import toDoList from '../reducers/toDoListReducer';

const rootReducer = combineReducers({
	products:products,
	users:users,
	defaultTheme:defaultTheme,
	themes:themes,
	toDoLists: toDoList
});


export default rootReducer;