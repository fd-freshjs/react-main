import React, { Component } from 'react';
import Input from '../../component/Input';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      scale: 'km',
    };
  }

  changeValue = (name, newValue) => {
    this.setState((state) => {
      return {
        ...state,
        value: Number(newValue),
        scale: name,
      };
    });
  };

  render() {
    const { value, scale } = this.state;
    let mile = value;
    let km = value;

    if (scale === 'km' && typeof value === 'number') {
      mile = value * 0.621;
    } else if (scale === 'mile' && typeof value === 'number') {
      km = value * 1.609;
    }

    return (
      <>
        <Input
          type="number"
          placeholder="Miles per hour"
          name="mile"
          value={String(mile)}
          onChange={this.changeValue}
        >
          Test
        </Input>
        <Input
          type="number"
          placeholder="Kilometers per hour"
          name="km"
          value={String(km)}
          onChange={this.changeValue}
        />
      </>
    );
  }
}
