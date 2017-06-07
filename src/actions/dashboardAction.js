import todoApi from '../Api/toDoApi'

export function toDoListSubmit(toDoList){
	return {type:'TODO_SUBMIT', toDoList:toDoList}
}

export function toDoListLoadSuccess(toDoLists){
	return {type:'TODO_LOAD', toDoLists:toDoLists}
}

export function toDoListUpdate(updateItem){
	return {type:'TODO_EDIT', updateItem:updateItem}
}

export function toDoListDelete(deleteToDoItem){
	return {type:'TODO_DELETE', deleteToDoItem:deleteToDoItem}
}

export function updateCheckboxStatus(updateItem){
 console.log("updateItem ", updateItem);
	return {type:'UPDATE_CHECKBOX_STATUS', updateItem}
}

export function loadToDo(){
	return function(dispatch){
		return todoApi.getAllToDoData().then(toDoLists => {
			dispatch(toDoListLoadSuccess(toDoLists));
		}).catch(error => {
			throw(error);
		})
	}
}