import productsApi from '../api/productsApi';

export function loadProductsSuccess(products){
	return {type:'LOAD_PRODUCTS_SUCCESS', products: products}
}

export function loadProducts(products){
	return function(dispatch){
		return productsApi.getAllproducts().then(products => {
			dispatch(loadProductsSuccess(products));
		}).catch(error => {
			throw(error);
		})
	}
}
