import { createContext, useReducer } from "react";
import reducer, { globalStore } from "../reducers";

export const StoreContext = createContext(globalStore);

export const useStore = () => {
    const store = useReducer(reducer, globalStore)

    return store;
}
