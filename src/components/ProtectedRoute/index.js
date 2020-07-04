import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
const ProtectedRoute = ({ component: Comp, auth, token, path, redirectPath = '/auth/login', ...rest }) => {
  useEffect(() => {
    let isSubscribed = true;
    
    return () => isSubscribed = false;
  }, [auth]);
  return(
    <Route 
      path={path}
      {...rest}
      render={props => {
        return auth ? (
        <Comp {...props} token={token} />
        ) :  (
        <Redirect to={{
          pathname: redirectPath,
          state: {
            prevLocation: path,
            error: "UnAuthorized Access!",
          }
        }}
        />
        )
      }}
    />
  )
}

const mapTokenToProps = state => {
  return { token: state.authReducer.token }
}

export default connect(mapTokenToProps, null)(ProtectedRoute)
