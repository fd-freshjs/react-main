import { useContext, useReducer } from "react";
import globalReducer, { globalStore } from "../reducers";
import { StoreContext } from "../../contexts";

const Store = (props) => {
    const store = useReducer(globalReducer, globalStore);

    return <StoreContext.Provider value={store}>
        {props.children}
    </StoreContext.Provider>
}

export const useSelector = (func) => {
    const [store] = useContext(StoreContext);
    return func ? func(store) : store;
}

export const useDispatch = (func) => {
    const [, dispatch] = useContext(StoreContext);
    return dispatch;
}

export const useStore = (func) => {
    const [store, dispatch] = useContext(StoreContext);
    return [func ? func(store) : store, dispatch];
}

export default Store;
