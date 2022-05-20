import React from 'react';
import { useDispatch, useSelector } from '../../app/store';
import { useForm } from '../../hooks';

// типа отправка данных на сервер
const send = (data) => {
  return new Promise((res, rej) => {
    setTimeout(() => Math.random() < 0.6 ? res(data) : rej(new Error('Cannot cerate task')), 2000);
  });
}

function Todo () {
  const tasks = useSelector(store => store.tasks);
  const dispatch = useDispatch();

  const [formState, onInputChange, resetField] = useForm({ task: '' });
  const onSubmit = e => {
    e.preventDefault();

    /* send({ text: formState.task, id: Math.random() * 2000 })
      .then((data) => {
        // dispatch (action)
        dispatch({
          type: 'addTask',
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'addTaskError',
          payload: error,
        });
      }); */

    async function sendAsync (payload) {
      try {
        const data = await send(payload);

        dispatch({
          group: 'tasks',
          type: 'addTask',
          payload: data,
        });
      } catch (error) {
        console.error(error);

        dispatch({
          group: 'tasks',
          type: 'addTaskError',
          payload: error,
        });
      }
    }
    dispatch({ group: 'tasks', type: 'loadTasks' });
    sendAsync({ text: formState.task, id: Math.random() * 2000 });
    
    resetField('task');
  };
  // если массив задач меняеся то записать его в localStorage
  // а при монтировании читать задачи из localStorage

  return (
    <div>
      {/* component AddTask */}
      <form onSubmit={onSubmit}>
        <input
          name='task'
          type='text'
          value={formState.task}
          onChange={onInputChange}
        />
        <button type='submit'>Add todo</button>
        <span>{tasks.isLoading ? 'Loading' : ''}</span>
      </form>

      <div>{tasks.error?.toString()}</div>

      <ul>
        {tasks.list.map(task => {
          return (
            /* component TaskItem */
            <li key={task.id}>
              {task.text}{' '}
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => dispatch({ type: 'deleteTask', payload: task.id })}
              >
                <svg
                  width='24'
                  height='24'
                  style={{ color: 'black' }}
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z'
                  />
                </svg>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
