import pagesApi from '../Api/pagesApi'

export function loadPagessSuccess(pages){
	return {type:'LOAD_PAGES', pages:pages}
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