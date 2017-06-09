import themesApi from '../Api/themesApi'

export function initialState(theme) {
  return {type: 'INITIAL_THEMES_SUCCESS', themes: "blue"}
}
export function loadThemesSuccess(themes) {
  return {type: 'LOAD_THEMES_SUCCESS', themes:themes}
}
export function updateThemeState(theme) {
    return {type: 'UPDATE_THEMES_SUCCESS', theme: theme}
}

export function loadThemes(themes) {
  return function (dispatch) {
    return themesApi
      .getAllthemes()
      .then(themes => {
        dispatch(loadThemesSuccess(themes)) && dispatch(initialState(themes));
      })
      .catch(error => {
        throw(error);
      })
  }
}