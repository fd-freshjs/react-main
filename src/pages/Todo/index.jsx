import React, { useContext } from 'react';
import { StoreContext } from '../../contexts';
import { useForm } from '../../hooks';

// типа отправка данных на сервер
const send = async (data) => {
  return new Promise((res, rej) => {
    setTimeout(() => res(data), 400);
  });
}

function Todo () {
  const [store, dispatch] = useContext(StoreContext);
  // ячейка это обьект
  // const [tasks, addTask, deleteTask] = useTasks([]);

  const [formState, onInputChange, resetField] = useForm({ task: '' });
  const onSubmit = e => {
    e.preventDefault();
    
    send({ text: formState.task, id: Math.random() * 2000 })
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
      })
    
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
      </form>

      <ul>
        {store.tasks.map(task => {
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
