import productsApi from '../api/productsApi';

export function loadProductsSuccess(products) {
  return {type: 'LOAD_PRODUCTS_SUCCESS', products: products}
}

export function loadProductsAfterDeleteSuccess(products) {
  return {type: 'LOAD_PRODUCTS_AFTER_DELETE_SUCCESS', products: products}

}

export function updateProductsSuccess(products) {
  return {type: 'UPDATE_PRODUCTS_SUCCESS', products: products}
}

export function createProductsSuccess(products) {
  return {type: 'CREATE_PRODUCTS_SUCCESS', products: products}
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

export function deleteProduct(products) {
  console.log("action 2");
  return function (dispatch) {
    return productsApi
      .deleteProductRow(products)
      .then(() => {
        dispatch(loadProductsAfterDeleteSuccess(products));
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function saveProduct(products) {
  var newProductDetails = products;
  return function (dispatch) {
    return productsApi
      .saveProduct(products)
      .then(savedProducts => {
        console.log("new", newProductDetails);
        console.log("save", savedProducts);
        newProductDetails.productname
          ? dispatch(updateProductsSuccess(savedProducts))
          : dispatch(createProductsSuccess(savedProducts));
      })
      .catch(error => {
        throw(error);
      })
  }
}