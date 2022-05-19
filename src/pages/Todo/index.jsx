import React from 'react';
import { useForm, useTasks } from '../../hooks';

function Todo () {
  // ячейка это обьект
  const [tasks, addTask, deleteTask] = useTasks([]);

  const [formState, onInputChange, resetField] = useForm({ task: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    addTask({ text: formState.task, id: Math.random() * 2000 });
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
        {tasks.map(task => {
          return (
            /* component TaskItem */
            <li key={task.id}>
              {task.text}{' '}
              <span style={{ cursor: 'pointer' }} onClick={() => deleteTask(task.id)}>
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
