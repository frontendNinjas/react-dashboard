export default function themesReducer(state = [], action) {
    switch (action.type) {
        case 'LOAD_THEMES_SUCCESS':
            return action.themes;
        case 'UPDATE_THEMES_SUCCESS':
            const updateThemes = action.themes;
            return updateThemes;
        default:
            return state;
    }
}