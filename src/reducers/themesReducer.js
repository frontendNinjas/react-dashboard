export default function themesReducer(state = [], action) {
    switch (action.type) {
        case 'LOAD_THEMES_SUCCESS':
            return action.themes;
        case 'UPDATE_THEMES_SUCCESS':
            console.log("Reducer", state)
            // const updatedThemes = Object.assign([], state) const indexOfThemesUpdate =
            // state.findIndex(x => x.colorClass == action.colorLists.colorClass);
            // updatedThemes[indexOfThemesUpdate] = action.colorLists
            // console.log("themesReducer", action.colorLists) return updatedThemes;
        default:
            return state;
    }
}