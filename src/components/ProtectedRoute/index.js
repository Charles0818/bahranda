import React, { useEffect, useLayoutEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../helpers';
import { FullScreenSpinner } from '../Spinners';
const { authActions: { getUserProfile }, UIActions: { startLoading } } = actions;
const ProtectedRoute = ({
  component: Comp, auth, token, isLoggedIn, isLoading, startLoading, getUserProfile, path, redirectPath = '/auth/login', ...rest
}) => {

  // startLoading()
  // useLayoutEffect(() => {
  //   startLoading()
  // })
  useLayoutEffect(() => {
    let isSubscribed = true;
    if(token && !isLoggedIn) getUserProfile(token);
    console.log('token from protectedRoute', token)
    console.log('isLoggedIn new', isLoggedIn)
    return () => isSubscribed = false;
  }, [isLoggedIn, token]);
  if(isLoading || !isLoggedIn) return <FullScreenSpinner isLoading={isLoading} />
  return(
    <Route 
      path={path}
      {...rest}
      render={props => {
        return isLoading
        ? <FullScreenSpinner isLoading={isLoading} />
        : token && isLoggedIn ? (
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
  const { isLoading } = state.UIReducer;
  return { token, isLoggedIn, isLoading }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUserProfile, startLoading }, dispatch)
export default connect(mapTokenToProps, mapDispatchToProps)(ProtectedRoute)
