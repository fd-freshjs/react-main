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


  // didmount + didupdate
  useEffect(() => {
    document.title = `Автокликер ${timerId === null ? 'остановлен' : 'запущен'}`
  });

  // didmount
  useEffect(() => {
    startAuto();
  }, []);

  // didmount + didupdate (timerId)
  useEffect(() => {
      // сделать что то на монтирование
      console.log('mount');
      // сделать что то на обновление timerId
      console.log('didupdate');
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
