export default function themesReducer(state = [], action) {
    switch (action.type) {
        case 'INITIAL_THEMES_SUCCESS':
            return action.themes;
        case 'LOAD_THEMES_SUCCESS':
            return action.themes;
        case 'UPDATE_THEMES_SUCCESS':
            var updatedThemes = action.theme
            return updatedThemes;
        default:
            return state;
    }
}