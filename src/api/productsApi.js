import productsData from '../api/productsData';
import _clone from 'lodash/clone'
import delay from '../api/delay'
import _find from 'lodash/find'
import _remove from 'lodash/remove'
import _indexOf from 'lodash/indexOf'

var productsApi = {

    getAllproducts(){
		return new Promise((resolve, reject) => {
			setTimeout(()=>{				
				resolve(_clone(productsData));
			},delay);
		});
	},
    
    deleteProductRow(products){
    	console.log("api 3");
			return new Promise((resolve, reject) => {
				setTimeout(()=>{
					var products = _remove(productsData, function(n){
						return n.products == products
				});
				resolve(productsData);
			},delay);
		})
	},
    saveProduct(products){
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				if(_find(productsData,{productname: products.productId})){
					var existingProductsIndex = _indexOf(productsData, _find(productsData, {id: products.productId})); 
					productsData.splice(existingProductsIndex, 1, products);			

				}else{
					productsData.push(products);
				}
				resolve(_clone(products))
			},delay);
		})
	}

}

export default productsApi