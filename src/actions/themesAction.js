import themesApi from '../Api/themesApi'

export function loadThemesSuccess(themes) {
  return {type: 'LOAD_THEMES_SUCCESS', themes: themes}
}

export function updateThemesSuccess(themes) {
    return {type: 'UPDATE_THEMES_SUCCESS', themes: themes}
}

export function loadThemes(themes) {
  return function (dispatch) {
    return themesApi
      .getAllthemes()
      .then(themes => {
        dispatch(loadThemesSuccess(themes));
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function updateThemes(themes) {
    const newTheme = themes;
   console.log("dhajsdhajsdhsaj", newTheme)
}