import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { auth } from '../../types';
import { authActions } from '../../actions';
import { sendData, getData, deleteData, apiKey } from '../ajax';
const {
  SIGN_IN_REQUEST, SIGN_IN_SUCCESS,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS,
  SIGN_IN_ERROR, SIGN_UP_ERROR,
  CONFIRM_PIN, PIN_ERROR, ISLOADING
} = auth;
const {
  signInSuccess, signInError,
  signUpSuccess, signUpError, pinError,
  setIsLoading, confirmPinSuccess
} = authActions;

const networkErrorMessage = 'No internet connection detected';
const authDBCalls = {
  signUp: async (data) => {
    const response = await sendData(`${apiKey}/auth/register`, data);
    return response
  },
  signIn: async (data) => {
    const response = await sendData(`${apiKey}/auth/login`, data);
    return response
  },
  confirmPin: async (data) => {
    const response = await sendData(`${apiKey}/auth/activate`, data);
    return response
  }
}

// All generators*
function* signUp({ payload: { data, redirect } }) {
  try {
    yield put(setIsLoading(true))
    yield call(authDBCalls.signUp, data);
    yield put(signUpSuccess(data.email));
    yield call(redirect('/auth/activate'))
  } catch (err) {
    const { errors } = err;
    const errorMessage = !errors ? 'No internet connection detected' : errors[0].title;
    console.log('error found', err);
    yield put(signUpError(errorMessage));
  }
}

function* signIn({ payload: { data, redirect } }) {
  try {
    yield put(setIsLoading(true))
    const user = yield call(authDBCalls.signIn, data);
    yield put(signInSuccess(user));
    yield call(redirect('/account'))
  } catch (err) {
    const { status, title } = err;
    let errorMessage;
    if(status) {
      if(status === 400) errorMessage = title;
      if(status === 422) errorMessage = 'Invalid email or password'
    } else {
      errorMessage = networkErrorMessage
    }
    console.log('error found', err);
    yield put(signInError(errorMessage))
  }
}

function* confirmPin({ payload: { data, redirect } }){
  try {
    yield put(setIsLoading(true))
    const confirmed = yield call(authDBCalls.confirmPin, data);
    console.log('returned pin response', confirmed)
    yield put(confirmPinSuccess())
    yield call(redirect('/account'))
  } catch (err) {
    console.log('error found', err);
    const { errors } = err;
    const errorMessage = errors
      ? errors[0].title
      : networkErrorMessage
    yield put(pinError(errorMessage))
  }
}

function* signUpRequest() {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}

function* signInRequest() {
  yield takeLatest(SIGN_IN_REQUEST, signIn)
}

function* confirmPinRequest() {
  yield takeLatest(CONFIRM_PIN, confirmPin)
}

export default function* authSagas() {
  yield spawn(signUpRequest)
  yield spawn(signInRequest)
  yield spawn(confirmPinRequest)
}