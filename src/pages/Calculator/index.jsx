import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Input from '../../component/Input';
import { useForm } from '../../hooks';
import './Calculator.scss';

function Calculator (props) {
  const [trigger, setTrigger] = useState(false);
  const [state, onChange] = useForm({ km: 0, mile: 0 });
  const [scale, setScale] = useState('km');

  const changeValue = useCallback(
    ({ name, value }) => {
      setScale(name);
      onChange({ target: { value: Number(value), name } });
    },
    [onChange]
  );

  const mile = useMemo(
    () => (scale === 'km' ? Number(state[scale]) * 0.621 : state.mile),
    [state, scale]
  );
  const km = useMemo(
    () => (scale === 'mile' ? Number(state[scale]) * 1.609 : state.km),
    [state, scale]
  );

  const handleValueChange = useCallback(() => {
    console.log('value changed. storing...');
    // more code
    localStorage.setItem('km', km);
    localStorage.setItem('mile', mile);
  }, [km, mile]);

  useEffect(() => {
    handleValueChange();
  }, [handleValueChange]);

  return (
    <div className='calculator'>
      <button onClick={() => setTrigger(!trigger)}>Trigger</button>
      <Input
        classes={{ root: 'label', input: 'input' }}
        type='number'
        name='km'
        value={km}
        onChange={changeValue}
      >
        Kilometers
      </Input>
      <Input
        classes={{ root: 'label', input: 'input' }}
        type='number'
        name='mile'
        value={mile}
        onChange={changeValue}
      >
        Miles
      </Input>
    </div>
  );
}

export default Calculator;
