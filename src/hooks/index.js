import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../contexts';
import { getLocaleText } from '../locale';

export const useTasks = (taskArray = []) => {
  const [tasksArr, setTasksArr] = useState(taskArray);
  const addNewTask = (data) => {
    setTasksArr((oldTasks) => [...oldTasks, data]);
  };

  const deleteTask = (id) => {
    setTasksArr((oldTasks) => {
      const newTasks = oldTasks.filter((t) => t.id !== id);

      return newTasks;
    });
  };

  return [tasksArr, addNewTask, deleteTask];
};

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const onInputChange = ({ target: { value, name } }) => {
    // e.target.value === { target: { value } }
    setFormState((s) => ({ ...s, [name]: value }));
  };

  const resetField = (field = '') => {
    if (field) {
      onInputChange({ target: { name: field, value: initialState[field] } });
    }
  };

  return [formState, onInputChange, resetField];
};

export const useFetch = (promise, initialState = {}, deps = []) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    promise
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [promise, ...deps]);

  return [data, isFetching, error];
};

export const useTranslation = (dict) => {
  const [store] = useContext(StoreContext);
  const { lang } = store;

  return (code, ctx) =>
    getLocaleText({
      dict: dict,
      locale: lang,
      code: code,
      ctx: ctx,
    });
};

export const useThemeClasses = (themeName, classesMap = {}, separator = '_') => {
  return key => {
    const var1 = classesMap[key];
    if (typeof var1 === 'string') {
      const themeClass = classesMap[`${key}${separator}${themeName.toLowerCase()}`];
      return themeClass ? themeClass : var1;
    } else if (var1 instanceof Object) {
      return var1[themeName];
    }

    const var2 = classesMap[themeName];
    if (typeof var2 === 'string') {
      return var2;
    }else if (var2 instanceof Object) {
      return var2[key];
    }

    return key;
  };
};

/*
  // var1 - string
  const classesMap = {
    welcomeSection: 'Welcome_welcomeSection_1g1Y24',
    welcomeSection_light: 'Welcome_welcomeSection_light_1g1Y24',
    welcomeSection_dark: 'Welcome_welcomeSection_dark_1g1Y24',
  };

  // var1 - object
  const classesMap = {
    welcomeSection: {
      [themeEnum.DARK]: 'welcomeSectionDark',
      [themeEnum.LIGHT]: 'welcomeSectionLight',
    },
  };

  // var2 - object
  const classesMap = {
    [themeEnum.DARK]: {
      welcomeSection: 'welcomeSectionDark',
    },
    [themeEnum.LIGHT]: {
      welcomeSection: 'welcomeSectionLight',
    },
  };

  // var2 - string
  const classesMap = {
    [themeEnum.DARK]: 'welcomeSectionDark',
    [themeEnum.LIGHT]: 'welcomeSectionLight',
  };
*/
