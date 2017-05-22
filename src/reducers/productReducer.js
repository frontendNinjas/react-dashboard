export default function productReducer(state=[], action){
	switch(action.type){
		case 'LOAD_PRODUCTS_SUCCESS': 
			return action.products;
	    case 'CREATE_PRODUCTS_SUCCESS': 
			return Object.assign([], action.products);
	    case 'UPDATE_PRODUCTS_SUCCESS': 
			return [...state.filter(products => products.productname !== action.products.productname),Object.assign({},action.products)];
	    case 'LOAD_PRODUCTS_AFTER_DELETE_SUCCESS': 
	    const newState = Object.assign([], state);
	    const indexOfProductsToDelete = state.findIndex(products => {return action.products})
	    newState.splice(indexOfProductsToDelete, 1);
	    return newState;
		default:
			return state;
	}
}