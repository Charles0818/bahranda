import account from './account';
import { spawn } from 'redux-saga/effects';

export default function* rootSaga() {
  yield spawn(serviceSagas)
}
