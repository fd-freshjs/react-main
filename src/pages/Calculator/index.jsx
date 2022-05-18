import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Input from '../../component/Input';

function Calculator (props) {
  const [trigger, setTrigger] = useState(false);
  const [value, setValue] = useState(0);
  const [scale, setScale] = useState('km');

  const changeValue = useCallback((name, newValue) => {
    setValue(Number(newValue));
    setScale(name);
  }, []);

  const mile = useMemo(() => scale === 'km' ? Number(value) * 0.621 : value, [value, scale]);
  const km = useMemo(() => scale === 'mile' ? Number(value) * 1.609 : value, [value, scale]);



  const handleValueChange = useCallback(() => {
    console.log('test');
    // more code
    localStorage.setItem('value', value);
  }, [value]);

  useEffect(() => {
    handleValueChange();
  }, [handleValueChange]);

  return <>
    <button onClick={() => setTrigger(!trigger)}>Trigger</button>
    <Input
      type="number"
      placeholder="Miles per hour"
      name="mile"
      value={mile}
      onChange={changeValue}
    >
      Test
    </Input>
    <Input
      type="number"
      placeholder="Kilometers per hour"
      name="km"
      value={km}
      onChange={changeValue}
    />
  </>;
}

export default Calculator;
