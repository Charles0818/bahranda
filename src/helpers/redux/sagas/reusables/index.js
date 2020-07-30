import { put } from 'redux-saga/effects';
import { UIActions, authActions } from '../../actions';
const { showNetworkError } = UIActions;
const { signOut } = authActions;
export const delay = time => new Promise(resolve => setTimeout(resolve, time));

export function* networkError(action) {
  yield put(showNetworkError(action))
}

export function* unAuthenticatedError(err) {
  console.log('error reference', err)
  if(err.message) {
    console.log('error seem to have message object')
    yield put(signOut())
  }
}