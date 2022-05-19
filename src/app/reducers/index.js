import userReducer, { userState } from './user.reducer';

export const globalStore = {
  user: userState,
  // lang: langState,
  // theme: themeState,
};

const reducer = (oldState = globalStore, action = {}) => {
  switch (action.group) {
    case 'user': {
      return userReducer(oldState, action);
    }
    //   case 'lang': {
    //     return langReducer(oldState, action);
    //   }
    //   case 'theme': {
    //     return themeReducer(oldState, action);
    //   }
    default: {
      return oldState;
    }
  }
};

export default reducer;
