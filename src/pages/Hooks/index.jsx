import React from 'react';
import StopWatch from '../../component/StopWatch';

// на хуках потренироваться сделать слайдер < num >

function CalcListItems (list) {
  return <ul>
    {list.map(item => (
      <li>{item.text}</li>
    ))}
  </ul>
};

function HooksPage (props) {
  return (
    <div>
      {/* <Counter /> */}
      <StopWatch ></StopWatch>
    </div>
  );
}

export default HooksPage;
