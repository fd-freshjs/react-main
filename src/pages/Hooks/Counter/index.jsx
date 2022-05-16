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

  const [render, setRender] = useState(true);

  return (
    <div>
      HooksPage
      <div>
        <button onClick={
          () => {
            setRender((oldRender) => !oldRender);
          }
        }>Переключить рендер</button>
        <div>{count}</div>
        <div>
          <button onClick={increase}>Добавить 1</button>
          <button onClick={decrease}>Отнять 1</button>
        </div>
        {render && <AutoClick action={increase} />}

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
