function themes(state = [], action) {
    switch (action.type) {
        case 'LOAD_THEMES_SUCCESS':
            return action.themes;
        default:
            return state;
    }
}

function defaultTheme (state = [], action) {
    switch (action.type) {
        case 'INITIAL_THEMES_SUCCESS':
            let defaultTheme = "blue"
            return defaultTheme;
        case 'UPDATE_THEMES_SUCCESS':
            const newTheme = action.selectedTheme; 
            return newTheme;
        default:
            return state;
    }
}

export {themes, defaultTheme}