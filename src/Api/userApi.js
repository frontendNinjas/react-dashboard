import userData from '../api/userData'
import _clone from 'lodash/clone'
import _find from 'lodash/find'
import _remove from 'lodash/remove'
import _indexOf from 'lodash/indexOf'

var userApi = {
	getAllusers(){
		return _clone(userData);
	},
	getUserByUserName(userId){
		var user = _find(userData,{username: userId});
		return user;
	},
	saveAuthor(user){
		if(_find(userData,{username: user.userId})){
			var existingUserIndex = _indexOf(userData, _find(userData, {id: user.userId})); 
			userData.splice(existingUserIndex, 1, user);			

		}else{
			userData.push(user);
		}
		return _clone(user)
	},
	deleteAuthor(userId){
		_remove(userData, { username: userId});
	}
}

export default userApi;