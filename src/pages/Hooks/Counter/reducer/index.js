export const initialState = {
  count: 0,
  step: 1,
};

const stepReducer = (oldState = initialState, action = {}) => {
  if (action.type === 'setStep') {
    return { ...oldState, step: action.payload };
  }
  return oldState;
}

const countReducer = (oldState = initialState, action = {}) => {
  if (action.type === 'increase') {
    return { ...oldState, count: oldState.count + 1 };
  } else if (action.type === 'decrease') {
    return { ...oldState, count: oldState.count - 1 };
  }

  return oldState;
};

const reducer = (oldState = initialState, action = {}) => {
  switch(action.group) {
    case 'count': {
      return countReducer(oldState, action);
    }
    case 'step': {
      return stepReducer(oldState, action);
    }
    default: {
      return oldState;
    }
  }
}

export default reducer;
