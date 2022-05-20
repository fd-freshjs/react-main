import { themeEnum } from "../../enums";

export const themeState = themeEnum.LIGHT;

const themeReducer = (oldState = themeState, action) => {
    switch (action.type) {
        case 'nextTheme': {
            const themes = Object.entries(themeEnum);
            const currentThemeIndex = themes.findIndex(([key, value]) => value === oldState);
            const nextTheme = themes[(currentThemeIndex + 1) % themes.length];

            return nextTheme[1];
        }
    
        default:
            return oldState;
    }
}

export default themeReducer;
