export default function themesReducer(state = [], action) {
    switch (action.type) {
        case 'INITIAL_THEMES_SUCCESS':
            return action.themes;
        case 'LOAD_THEMES_SUCCESS':
            return action.themes;
        case 'UPDATE_THEMES_SUCCESS':
            let newTheme = action.themes;
            console.log("newTheme ", newTheme);
            let store = Object.assign({}, ({newTheme: newTheme}));
            console.log('new store', store);
            return store;
        default:
            return state;
    }
}