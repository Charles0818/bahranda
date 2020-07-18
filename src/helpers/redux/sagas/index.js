import { spawn } from 'redux-saga/effects';
import authSagas from './auth';
import accountSagas from './account';
import commoditySagas from './commodities';
import walletSagas from './wallet';
export default function* rootSaga() {
  yield spawn(authSagas)
  yield spawn(accountSagas)
  yield spawn(commoditySagas)
  yield spawn(walletSagas)
}
