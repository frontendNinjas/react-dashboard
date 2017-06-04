import {combineReducers} from 'redux';
import products from '../reducers/productReducer';
import user from '../reducers/userReducer';
import users from '../reducers/usersReducer';

const rootReducer = combineReducers({
	products:products,
	users:users
});

export default rootReducer;