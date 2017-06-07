export default function dashboardReducer(state = [], action) {
				if (action.type === 'TODO_SUBMIT') {
								return [
												...state,
												Object.assign({}, action.toDoList)
								];
				} else if (action.type === 'TODO_EDIT') {
								var updatedToDoList = Object.assign([], state)
								var foundIndex = updatedToDoList.findIndex(x => x.task == action.updateItem.oldValue);
								updatedToDoList[foundIndex].task = action.updateItem.newValue
								return updatedToDoList;
				} else if (action.type === 'TODO_DELETE') {
								let remainingArray = state.filter(function (n) {
												return n !== action.deleteToDoItem;
								})
								return remainingArray
				}else if(action.type === 'TODO_LOAD'){
					return action.toDoLists;
				} else if(action.type === 'UPDATE_CHECKBOX_STATUS'){
								var updatedCheckboxStatus = Object.assign([], state)
								var foundIndex = updatedCheckboxStatus.findIndex(x => x.task == action.updateItem.task);
								updatedCheckboxStatus[foundIndex].status = action.updateItem.status
								return updatedCheckboxStatus;
				} else {
								return [...state]
				}
}
