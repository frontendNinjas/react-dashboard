import userData from '../api/userData'
import _clone from 'lodash/clone'
import _find from 'lodash/find'
import _remove from 'lodash/remove'
import _indexOf from 'lodash/indexOf'
import delay from '../api/delay'
var userApi = {
	getAllusers(){
		return new Promise((resolve, reject) => {
			setTimeout(()=>{				
				resolve(_clone(userData));
			},delay);
		});
	},
	getUserByUserName(userId){
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				var user = _find(userData,{username: userId});
				resolve(user);
			},delay);
		});
		
	},
	saveUser(user){
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				if(_find(userData,{username: user.userId})){
					var existingUserIndex = _indexOf(userData, _find(userData, {id: user.userId})); 
					userData.splice(existingUserIndex, 1, user);			

				}else{
					userData.push(user);
				}
				resolve(_clone(user))
			},delay);
		})
	},
	deleteUser(userId){
			return new Promise((resolve, reject) => {
				setTimeout(()=>{
					var users = _remove(userData, function(n){
						return n.username == userId
				});
				resolve(userData);
			},delay);
		})
	}
}

export default userApi;