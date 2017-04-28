export default function productReducer(state=[], action){
	switch(action.type){
		case 'LOAD_PRODUCTS_SUCCESS': 
			return action.products;
		default:
			return state;
	}
}