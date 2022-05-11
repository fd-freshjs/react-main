import React, { Component } from 'react';

class FormControl extends Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      ...props.initialState,
    };
    this.state = {
      ...this.defaultState,
    };
  }

  onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    // validate this.props.validationSchema

    this.props.onSubmit(this.state);
  }

  render() {
    const renderProps = { onChange: this.onChange, values: this.state };
    const Form = this.props.component;

    return (
      <form onSubmit={this.onSubmit}>

        <Form {...renderProps} />

        {typeof this.props.children === 'function'
          ? this.props.children(renderProps)
          : this.props.children}
      </form>
    );
  }
}

export default FormControl;
