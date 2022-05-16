import React, { useState } from 'react';

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
  return (
    <div>
      <button onClick={startAuto}>Старт</button>
      <button onClick={stopAuto}>Стоп</button>
    </div>
  );
}

export default AutoClick;
