import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Comp, auth, path, redirectPath = '/auth/login', ...rest }) => {
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
        <Comp {...props} />
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
 
export default ProtectedRoute;
