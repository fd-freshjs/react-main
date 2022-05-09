import React from 'react';
import FormControl from '../../component/FormControl';
import LoginForm from './LoginForm';

function LoginPage() {
  const defaultState = {
    login: '',
    password: '',
  };

  const getData = (data) => {
    console.log(data);
  };

  return (
    <FormControl
      onSubmit={getData}
      initialState={defaultState}
      component={LoginForm}
    />
  );
}

export default LoginPage;
