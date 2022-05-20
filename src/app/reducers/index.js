import themeReducer, { themeState } from './theme.reducer';
import langReducer, { langState } from './lang.reducer';
import userReducer, { userState } from './user.reducer';

export const globalStore = {
  user: userState,
  lang: langState,
  theme: themeState,
  tasks: [],
};

const globalReducer = (oldState = globalStore, action = {}) => {

  switch(action.type) {
    case 'addTask': {

      return { ...oldState, tasks: [...oldState.tasks, action.payload] };
    }
    case 'deleteTask': {
      const newTasks = oldState.tasks.filter((t) => t.id !== action.payload);
      return { ...oldState, tasks: newTasks };
    }
    default:
      break;
  }

  switch (action.group) {
    case 'user': {
      return { ...oldState, user: userReducer(oldState.user, action) };
    }
    case 'lang': {
      return { ...oldState, lang: langReducer(oldState.lang, action) };
    }
    case 'theme': {
      return { ...oldState, theme: themeReducer(oldState.theme, action) };
    }
    default: {
      return oldState;
    }
  }
};

export default globalReducer;
