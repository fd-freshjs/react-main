import React, { useState } from 'react';

function Todo () {
  // ячейка это обьект
  const [tasksArr, setTasksArr] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  const onSubmit = () => {
    setTasksArr((oldTasks) => );
  };
  const onInputChange = ({ target: { value } }) => {
    // e.target.value === { target: { value } }
    setTodoValue(value);
  };

  const deleteTask = (id) => {
    setTasksArr((oldTasks) => {
      const newTasks = oldTasks.filter((t) => t.id !== id);

      return newTasks;
    });
  };

  // если массив задач меняеся то записать его в localStorage
  // а при монтировании читать задачи из localStorage

  return (
    <div>
      {/* component AddTask */}
      <form onSubmit={onSubmit}>
        <input type='text' value={todoValue} onChange={onInputChange} />
        <button type='submit'>Add todo</button>
      </form>

      <ul>
        {tasksArr.map(task => {
          return (
            /* component TaskItem */
            <li key={}>
              {task.text}{' '}
              <span onClick={() => deleteTask(id)}>
                <svg
                  width='24'
                  height='24'
                  style={{ color: 'white' }}

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
