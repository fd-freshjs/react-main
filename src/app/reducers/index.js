import themeReducer, { themeState } from './theme.reducer';
import langReducer, { langState } from './lang.reducer';
import userReducer, { userState } from './user.reducer';
import tasksReducer, { tasksState } from './tasks.reducer';

export const globalStore = {
  user: userState,
  lang: langState,
  theme: themeState,
  tasks: tasksState,
};

const globalReducer = (oldState = globalStore, action = {}) => {

  switch (action.group) {
    case 'user': {
      return { ...oldState, user: userReducer(oldState.user, action) };
    }
    case 'tasks': {
      return { ...oldState, tasks: tasksReducer(oldState.tasks, action) };
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
