import { put } from 'redux-saga/effects';
import { UIActions } from '../../actions';
const { showNetworkError } = UIActions;

export const delay = time => new Promise(resolve => setTimeout(resolve, time));

export function* networkError(action) {
  yield put(showNetworkError(action))
}