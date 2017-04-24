import {combineReducers} from 'redux';
import products from '../reducers/productReducer';
import users from '../reducers/userReducer';

const rootReducer = combineReducers({
	products:products,
	users:users
});

export default rootReducer;