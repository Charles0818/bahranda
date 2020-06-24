import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { auth } from '../../types';
import { authActions } from '../../actions';
import { sendData, getData, deleteData, apiKey } from '../ajax';
const {
  SIGN_IN_REQUEST, SIGN_IN_SUCCESS,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS,
  SIGN_IN_ERROR, SIGN_UP_ERROR,
  CONFIRM_PIN, PIN_ERROR
} = auth;
const {
  signInRequest, signInSuccess, signInError,
  signUpRequest, signUpSuccess, signUpError,
  pinError
} = authActions;
const authDBCalls = {
  signUp: async (data) => {
    const response = await sendData(`${apiKey}/`, data, token);
    return response
  },
  signIn: async (data) => {
    const response = await sendData(`${apiKey}/`, data);
    return response
  },
  confirmPin: async (data) => {
    const response = await sendData(`${apiKey}`, data);
    return response
  }
}

// All generators*
function* signUp({ payload: { data } }) {
  try {
    const email = yield call(authDBCalls.signUp, data);
    yield put(signUpSuccess(email))
  } catch (err) {
    console.log('error found', err);
    yield put(signUpError(err));
  }
}

function* signIn({ payload: { data } }) {
  try {
    const user = yield call(authDBCalls.signIn, data)
    yield put(signInSuccess(user))
  } catch (err) {
    console.log('error found', err);
    yield put(signInError(err))
  }
}

function* confirmPin({ payload: { data } }){
  try {
    const confirmed = yield call(authDBCalls.confirmPin, data)
    // yield put(initializeServices(services))
  } catch (err) {
    console.log('error found', err);
    yield put(pinError(err))
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