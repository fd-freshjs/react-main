import React from 'react'
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props) {
  return (
    <Route {...props.route} >
        props.auth
            ? props.children
            : <Redirect to="/login" />
    </Route>
  )
}

export default PrivateRoute;
