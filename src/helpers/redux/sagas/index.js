import { spawn } from 'redux-saga/effects';
import authSagas from './auth';
import dashboardSagas from './dashboard';
export default function* rootSaga() {
  yield spawn(authSagas)
  yield spawn(dashboardSagas)
}
