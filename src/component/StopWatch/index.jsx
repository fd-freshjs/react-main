import React, { useEffect, useState } from 'react';

function StopWatch () {
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(null);

  function tick () {
    setSeconds(secs => secs + 1);
  }

  function start () {
    if (timerId === null) {
      const id = setInterval(tick, 1000);
      setTimerId(id);
    }
  }

  function pause () {
    clearInterval(timerId);
    setTimerId(null);
  }

  function reset () {
    setSeconds(0);
  }

  // stop
  function pauseAndReset () {
    pause();
    reset();
  }

  // restart
  function restart () {
    reset();
    start();
  }

  // didmount
  useEffect(() => {
    // запуск при монтировании
    start();
    return () => {
      // остановка при размонтировании
      pause();
    };
  }, []);

  let hours = 0,
    mins = 0,
    secs = 0;

  secs = seconds % 60;
  mins = Math.floor((seconds - secs) / 60) % 60;
  hours = Math.floor((seconds - secs) / 60 - mins) % 24;

  return (
    <div>
      <div>
        {hours} : {mins} : {secs}
      </div>
      <div>{seconds}</div>
      <div>
        <button onClick={timerId ? pause : start}>
          {timerId ? 'Пауза' : 'Старт'}
        </button>

        <button onClick={restart}>Сброс</button>
        
        <button onClick={pauseAndReset}>Стоп</button>
      </div>
    </div>
  );
}

export default StopWatch;
