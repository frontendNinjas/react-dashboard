import {combineReducers} from 'redux';
import products from '../reducers/productReducer';

const rootReducer = combineReducers({
	products:products
});

export default rootReducer;