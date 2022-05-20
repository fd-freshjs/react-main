import React from "react";
import { globalStore } from "../app/reducers";

// заменено на store context
// export const UserContext = React.createContext({});
// export const ThemeContext = React.createContext(themeEnum.LIGHT);
// export const LangContext = React.createContext(langEnum.en);

export const StoreContext = React.createContext([globalStore]);
