import React, { useEffect, useState } from 'react';

function AutoClick (props) {
  const [timerId, setTimerId] = useState(null);
  const startAuto = () => {
    if (timerId === null) {
      const id = setInterval(props.action, 1000);
      setTimerId(id);
    }
  };
  const stopAuto = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  // didmount
  useEffect(() => {
    console.log('mount 1');
    startAuto();

    return () => {
      console.log('unmount 1');
      stopAuto();
    };
  }, []);

  useEffect(() => {
    console.log('mount 2');

    return () => {
      console.log('unmount 2');
    };
  }, []);

  console.log('render');
  return (
    <div>
      <button onClick={startAuto}>Старт</button>
      <button onClick={stopAuto}>Стоп</button>
    </div>
  );
}

export default AutoClick;
