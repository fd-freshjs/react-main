import React from 'react';

function LoginForm(props) {
  return (
    <div>
      <input
        name="login"
        onChange={props.onChange}
        value={props.values.login}
        placeholder="Email"
      />

      <input
        type="password"
        name="password"
        onChange={props.onChange}
        value={props.values.password}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </div>
  );
}

export default LoginForm;
