import pagesApi from '../Api/pagesApi'

export function loadPagessSuccess(pages){
	return {type:'LOAD_PAGES', pages:pages}
}

export function deletePage(title){
	return {type:'DELETE_PAGE', title:title}
}

export function addPage(pages){
	return {type:'ADD_PAGE', pages:pages}
}

export function updatePage(pages){
	return {type:'UPDATE_PAGE', pages:pages}
}

export function loadPages(pages){
	return function(dispatch){
		return pagesApi.getAllpages().then(pages => {
			dispatch(loadPagessSuccess(pages));
		}).catch(error => {
			throw(error);
		})
	}
}