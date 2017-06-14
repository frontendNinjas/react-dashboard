import themesApi from '../Api/themesApi'

export function initialState(defaultTheme) {
  return {type: 'INITIAL_THEMES_SUCCESS', defaultTheme: defaultTheme}
}
export function loadThemesSuccess(themes) {
  return {type: 'LOAD_THEMES_SUCCESS', themes:themes}
}
export function updateThemeState(selectedTheme) {
    return {type: 'UPDATE_THEMES_SUCCESS', selectedTheme: selectedTheme}
}

export function loadThemes(themes) {
  return function (dispatch) {
    return themesApi.getAllthemes().then(themes => {
        dispatch(loadThemesSuccess(themes));
      })
      .catch(error => {
        throw(error);
      })
  }
}
