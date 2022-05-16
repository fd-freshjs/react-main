import React, { useEffect, useState } from 'react';

function AutoClick (props) {
  const [isDidMount, setDidMount] = useState(true);
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


  // didmount + didupdate
  useEffect(() => {
    document.title = `Автокликер ${timerId === null ? 'остановлен' : 'запущен'}`
  });

  // didmount
  useEffect(() => {
    startAuto();
  }, []);

  // didmount + didupdate
  useEffect(() => {
    if (isDidMount) {
      setDidMount(false);
      // сделать что то только на монтирование
      console.log('mount');
    } else {
      // сделать что то только на обновление
      console.log('didupdate');
    }
  }, [timerId]);

  console.log('render');
  return (
    <div>
      <button onClick={startAuto}>Старт</button>
      <button onClick={stopAuto}>Стоп</button>
    </div>
  );
}

export default AutoClick;
