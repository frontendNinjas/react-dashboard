export default function pagesReducer(state = [], action) {
  if (action.type === 'ADD_PAGE') {
    return [
      ...state,
      Object.assign({}, action.pages)
    ];
  } else if (action.type === 'LOAD_PAGES') {
    return action.pages;
  } else if (action.type === 'UPDATE_PAGE') {
     console.log("update page")
  } else if (action.type === 'DELETE_PAGE') {
    let removedPage = state.filter(function (n) {
      return n.title !== action.title;
    })
    return removedPage
  } else {
    return [...state]
  }
}
