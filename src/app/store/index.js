import { createContext, useContext, useMemo, useReducer } from 'react';
import globalReducer, { globalStore } from '../reducers';
import { StoreContext } from '../../contexts';

// если у вас возникает вопрос а как оно работает
// у меня тот же вопрос :)
let globDispatch = () => {};
let ctxs = {};
const storeMap = {};

const DistinctStore = (props) => {
  const store = useReducer(globalReducer, globalStore);
  globDispatch = store[1];

  const contexts = useMemo(() => {
    ctxs = Object.keys(store[0]).reduce(
      (acc, key) => {
        acc[key] = createContext(store[0][key]);
        storeMap[key] = key;
        return acc;
      },
      { default: createContext() }
    );
    return ctxs;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const providers = useMemo(() => {
    return Object.entries(contexts).reduce(
      (acc, [key, ctx]) => (
        <ctx.Provider value={store[0][key]} children={acc} />
      ),
      props.children
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store, props.children]);

  return (
    <StoreContext.Provider value={store}>{providers}</StoreContext.Provider>
  );
};

export const useSelector = (func) => {
  const key = func(storeMap);
  const ctx = key ? ctxs[key] : StoreContext;
  const store = useContext(ctx);

  return ctx === StoreContext ? store[0] : store;
};

export const useDispatch = () => {
  return globDispatch;
};

export default DistinctStore;
