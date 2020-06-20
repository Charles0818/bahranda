import React, { Fragment, lazy } from 'react';
const ResetPassword = lazy(() => import('./ResetPassword'))
const ForgotPassword = lazy(() => import('./ForgotPassword'));
export default Auth = ({ match: { path } }) => {
  return (
    <Fragment>
      <Route path={`${path}/reset-password`} component={ResetPassword} />
      <Route path={`${path}/forgot-password`} component={ForgotPassword} />
    </Fragment>
  )
}