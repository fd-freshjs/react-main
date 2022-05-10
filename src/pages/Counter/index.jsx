import React, { Component } from 'react';
import ChangeCounter from './ChangeCounter';
import StepControl from './StepControl';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      step: 1,
      isIncrease: true,
    };
  }

  changeState = (callback) => {
    this.setState(callback);
  }

  render() {
    const { count, isIncrease } = this.state;

    return <div>
      <div>Счет: {count}</div>

      <section className="settings">
        <ChangeCounter
          isIncrease={isIncrease}
          changeState={this.changeState}
          step={this.state.step}
        />

        

        <StepControl />
      </section>
    </div>;
  }
}

export default Counter;
