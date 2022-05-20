export const tasksState = {
  list: [],
  error: null,
  isLoading: false,
};

const tasksReducer = (oldState = tasksState, action) => {
  switch (action.type) {
    case 'loadTasks' : {
        return { ...oldState, error: null, isLoading: true };
    }
    case 'addTask': {
      return { ...oldState, list: [...oldState.list, action.payload], isLoading: false };
    }
    case 'deleteTask': {
      const newTasks = oldState.list.filter((t) => t.id !== action.payload);
      return { ...oldState, list: newTasks , isLoading: false };
    }
    case 'addTaskError': {
      return { ...oldState, error: action.payload, isLoading: false };
    }
    default:
      break;
  }
};

export default tasksReducer;
