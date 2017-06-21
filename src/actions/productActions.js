import productsApi from '../api/productsApi';

export function loadProductsSuccess(products) {
  return {type: 'LOAD_PRODUCTS_SUCCESS', products: products}
}

export function updateProductsSuccess(products) {
  return {type: 'UPDATE_PRODUCTS_SUCCESS', products: products}
}

export function createProductsSuccess(products) {
  return {type: 'CREATE_PRODUCTS_SUCCESS', products: products}
}

export function deleteProduct(productid) {
  return {type: 'DELETE_PRODUCTS_SUCCESS', productid: productid}

}

export function loadProducts(products) {
  return function (dispatch) {
    return productsApi
      .getAllproducts()
      .then(products => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function updateProducts(products) {
  return function (dispatch) {
    return productsApi
      .updateProducts(products)
      .then(savedProducts => {
         dispatch(updateProductsSuccess(savedProducts));
      })
      .catch(error => {
        throw(error);
      })
  }
}