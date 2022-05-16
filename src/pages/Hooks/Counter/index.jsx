import React, { useState } from 'react';
import AutoClick from './AutoClick';
import StepControl from './StepControl';

function Counter () {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  
  const increase = () => {
    setCount(oldCount => oldCount + 1);
  };
  const decrease = () => {
    setCount(oldCount => oldCount - step);
  };

  const [tasks, setTasks] = useState([]);

  return (
    <div>
      HooksPage
      <div>
        <button onClick={
          () => {
            setTasks((tasks) => {
              const newTasks = [...tasks, Math.random()];
              // mutate
              return newTasks;
            });
          }
        }>Добавить таску</button>
        <div>Tasks: {tasks}</div>
        <div>{count}</div>
        <div>
          <button onClick={increase}>Добавить 1</button>
          <button onClick={decrease}>Отнять 1</button>
        </div>
        <AutoClick action={increase} />

        <StepControl
          value={step}
          onChange={e => {
            const value = e.target.value;
            setStep(Number(value));
          }}
        />
      </div>
    </div>
  );
}

export default Counter;
