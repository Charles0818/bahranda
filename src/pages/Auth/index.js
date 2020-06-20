import React, { Fragment, lazy } from 'react';
import { Route } from 'react-router-dom';
const ResetPassword = lazy(() => import('./ResetPassword'))
const ForgotPassword = lazy(() => import('./ForgotPassword'));
const Auth = ({ match: { path } }) => {
  return (
    <Fragment>
      <Route path={`${path}/reset-password`} component={ResetPassword} />
      <Route path={`${path}/forgot-password`} component={ForgotPassword} />
    </Fragment>
  )
}

export default Auth;