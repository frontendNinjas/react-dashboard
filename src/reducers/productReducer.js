export default function productReducer(state = [], action) {
	switch (action.type) {
		case 'LOAD_PRODUCTS_SUCCESS':
			return action.products;
		case 'CREATE_PRODUCTS_SUCCESS':
			console.log("action.product ", action.product);
			return [
				...state,
				Object.assign({}, action.products)
			]
		case 'UPDATE_PRODUCTS_SUCCESS':
			const updatedProducts = Object.assign([], state)
			const indexOfProductsUpdate = state.findIndex(x => x.productid == action.products.productid);
			updatedProducts[indexOfProductsUpdate] = action.products
			return updatedProducts;
		case 'DELETE_PRODUCTS_SUCCESS':
			let removedArray = state.filter(function (n) {
				return n.productid !== action.productid
			});
			return removedArray
		default:
			return state;
	}
}