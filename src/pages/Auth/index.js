import React, { Fragment, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './Signin';
import SignUp from './SignUp';
import ConfirmEmail from './ConfirmEmail';
import { Spinners } from '../../components';
import { PageWrapper } from '../components';
import './auth.scss'
const ResetPassword = lazy(() => import('./ResetPassword'))
const ForgotPassword = lazy(() => import('./ForgotPassword'));
const ForgotPasswordPin = lazy(() => import ('./ForgotPasswordPin'));

const { FullScreenSpinner } = Spinners;
const Auth = ({ match: { path } }) => {
  return (
    <PageWrapper>
      <Switch>
        <Suspense fallback={<FullScreenSpinner isLoading={true} />} >
          <Route exact path={`${path}/signin`} component={SignIn} />
          <Route exact path={`${path}/register`} component={SignUp} />
          <Route exact path={`${path}/activate`} component={ConfirmEmail} />
          <Route exact path={`${path}/reset-password`} component={ResetPassword} />
          <Route exact path={`${path}/forgot-password`} component={ForgotPassword} />
          <Route exact path={`${path}/pin/verify`} component={ForgotPasswordPin} />
        </Suspense>
      </Switch>
    </PageWrapper>
  )
}

export default Auth;