import toDoData from '../api/toDoData'
import _clone from 'lodash/clone'
import _find from 'lodash/find'
import _indexOf from 'lodash/indexOf'
import delay from '../api/delay'
var toDoDataApi = {
	getAllToDoData(){
		return new Promise((resolve, reject) => {
			setTimeout(()=>{				
				resolve(_clone(toDoData));
			},delay);
		});
	},
	savetoDoData(toDoList){
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				toDoData.push(toDoList);
				resolve(_clone(toDoData))
			},delay);
		})
	},
	deletetoDoData(toDoDataId){
			return new Promise((resolve, reject) => {
				setTimeout(()=>{
					var toDoDatas = _remove(toDoData, function(n){
						return n.toDoDataname == toDoDataId
				});
				resolve(toDoData);
			},delay);
		})
	}
}

export default toDoDataApi;