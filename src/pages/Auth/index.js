import React, { Fragment, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './Signin';
import SignUp from './SignUp';
import { Spinners } from '../../components';
const ResetPassword = lazy(() => import('./ResetPassword'))
const ForgotPassword = lazy(() => import('./ForgotPassword'));

const { FullScreenSpinner } = Spinners;
const Auth = ({ match: { path } }) => {
  return (
    <Fragment>
      <Switch>
        <Suspense fallback={<FullScreenSpinner isLoading={true} />} >
          <Route exact path={`${path}/signin`} component={SignIn} />
          <Route exact path={`${path}/register`} component={SignUp} />
          <Route exact path={`${path}/reset-password`} component={ResetPassword} />
          <Route exact path={`${path}/forgot-password`} component={ForgotPassword} />
        </Suspense>
      </Switch>
    </Fragment>
  )
}

export default Auth;