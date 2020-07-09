import { spawn } from 'redux-saga/effects';
import authSagas from './auth';
import accountSagas from './account';
export default function* rootSaga() {
  yield spawn(authSagas)
  yield spawn(accountSagas)
}
