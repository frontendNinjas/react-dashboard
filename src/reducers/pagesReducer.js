export default function pagesReducer(state=[], action){
   if(action.type === 'LOAD_PAGES'){
		return action.pages;
	}else{
		return [...state]
	}
}

