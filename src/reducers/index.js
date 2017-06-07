import {combineReducers} from 'redux';
import products from '../reducers/productReducer';
import user from '../reducers/userReducer';
import users from '../reducers/usersReducer';
import themes from '../reducers/themesReducer';

const rootReducer = combineReducers({
	products:products,
	users:users,
	themes:themes
});

export default rootReducer;