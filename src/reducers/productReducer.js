import {browserHistory} from 'react-router';

export default function productReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_PRODUCTS_SUCCESS':
      return action.products;
    case 'CREATE_PRODUCTS_SUCCESS':
      return [...state, Object.assign({}, action.products)]
    case 'UPDATE_PRODUCTS_SUCCESS':
    debugger;
      const updatedProduct = Object.assign([], state)
      const indexOfProductsUpdate = updatedProduct.findIndex(x => x.productid == action.products.productid);
      action.products.productid = action.products.productCode;
      updatedProduct[indexOfProductsUpdate] = action.products;
      return updatedProduct;
    case 'DELETE_PRODUCTS_SUCCESS':
      let removedArray = state.filter(function (n) {
        return n.productid !== action.productid
      });
      return removedArray
    default:
      return state;
  }
}