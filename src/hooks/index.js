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
