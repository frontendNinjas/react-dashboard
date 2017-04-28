import productsData from '../api/productsData';
import _clone from 'lodash/clone'
import delay from '../api/delay'

var productsApi = {

    getAllproducts(){
		return new Promise((resolve, reject) => {
			setTimeout(()=>{				
				resolve(_clone(productsData));
			},delay);
		});
	}

}

export default productsApi