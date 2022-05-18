import React, { useEffect, useState, useRef } from 'react';

function AutoClick (props) {
  const timerIdRef = useRef(null);

  const startAuto = () => {
    if (timerIdRef.current === null) {
      const id = setInterval(props.action, 1000);
      timerIdRef.current = id;
    }
  };
  const stopAuto = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  useEffect(() => {
    // didmount
    console.log('mount 1');
    startAuto();

    return () => {
      // unmount
      console.log('unmount 1');
      stopAuto();
    };
  }, []);

  const [trigger, setTrigger] = useState(true);
  useEffect(() => {
    function handleTrigger() {
      console.log(trigger);
    }

    document.body.addEventListener('click', handleTrigger);

    return () => {
      document.body.removeEventListener('click', handleTrigger);
    }
  }, [trigger]);

  console.log('render');
  return (
    <div style={{ border: '1px solid black' }}>
      <button onClick={startAuto}>Старт</button>
      <button onClick={stopAuto}>Стоп</button>

      <button onClick={(e) => {
        e.stopPropagation();
        setTrigger(!trigger);
      }}>Trigger update</button>
    </div>
  );
}

export default AutoClick;
