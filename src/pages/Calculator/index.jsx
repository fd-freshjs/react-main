import React, { useMemo, useState } from 'react';
import Input from '../../component/Input';

function Calculator () {
  const [value, setValue] = useState(0);
  const [scale, setScale] = useState('km');

  const changeValue = (name, newValue) => {
    setValue(Number(newValue));
    setScale(name);
  };

  // let mile = value;
  // let km = value;

  // if (scale === 'km') {
  //   mile = value * 0.621;
  // } else if (scale === 'mile') {
  //   km = value * 1.609;
  // }

  const mile = useMemo(() => scale === 'km' ? Number(value) * 0.621 : value, [value, scale]);
  const km = useMemo(() => scale === 'mile' ? Number(value) * 1.609 : value, [value, scale]);

  return <>
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
