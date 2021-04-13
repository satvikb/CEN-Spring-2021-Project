import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { db, auth } from '../firebase.config';
//https://stackoverflow.com/questions/47476186/when-user-is-not-logged-in-redirect-to-login-reactjs
const PrivateRoute = ({ component: Component, ...rest }) => {
  var user = auth.currentUser;
  const isLoggedIn = user != undefined;
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/adminlogin', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
