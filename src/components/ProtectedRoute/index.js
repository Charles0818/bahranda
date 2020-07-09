import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../helpers';

const { authActions: { getUserProfile } } = actions;
const ProtectedRoute = ({
  component: Comp, auth, token, isLoggedIn, getUserProfile, path, redirectPath = '/auth/login', ...rest
}) => {
  useEffect(() => {
    let isSubscribed = true;
    // if(token && !isLoggedIn) getUserProfile(token);
    console.log('token from protectedRoute', token)
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
  const { token, isLoggedIn } = state.authReducer;
  return { token, isLoggedIn }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUserProfile }, dispatch)
export default connect(mapTokenToProps, mapDispatchToProps)(ProtectedRoute)
