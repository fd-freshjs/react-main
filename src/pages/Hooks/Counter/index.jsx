import React, { useReducer, useState } from 'react';
import AutoClick from './AutoClick';
import counterReducer, { initialState } from './reducer';
import StepControl from './StepControl';

function Counter () {
  const [state, dispatch] = useReducer(counterReducer, initialState);

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
        <div>{state.count}</div>
        <div>
          <button onClick={() => dispatch({ group: 'counter', type: 'increase'})}>Добавить 1</button>
          <button onClick={() => dispatch({ group: 'counter', type: 'decrease'})}>Отнять 1</button>
        </div>
        {render && <AutoClick action={() => dispatch({ group: 'counter', type: 'increase'})} />}

        <StepControl
          value={state.step}
          onChange={e => {
            const value = e.target.value;

            dispatch({ group: 'step', type: 'setStep', payload: Number(value) });
          }}
        />
      </div>
    </div>
  );
}

export default Counter;
