import React from 'react';
import FormControl from '../../component/FormControl';
import LoginForm from './LoginForm';

function LoginPage () {
  const defaultState = {
    login: '',
    password: '',
  };

  const getData = data => {
    console.log(data);
  };

  return (
    <>
      <header>
        <nav></nav>
      </header>
      <h2>Login to your account</h2>
      <FormControl
        onSubmit={getData}
        initialState={defaultState}
        component={LoginForm}
      />
    </>
  );
}

export default LoginPage;
