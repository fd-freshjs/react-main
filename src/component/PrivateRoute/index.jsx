import React from 'react'
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props) {

  if (!props.auth) {
    return <Redirect to="/login" />;
  }

  return (
    <Route {...props.route} >
        {props.children}
    </Route>
  )
}

export default PrivateRoute;
