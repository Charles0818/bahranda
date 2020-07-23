import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { auth } from '../../types';
import { authActions, UIActions } from '../../actions';
import { networkError } from '../reusables';
import { sendData, getData, deleteData, apiKey } from '../ajax';
const {
  SIGN_IN_REQUEST, SIGN_UP_REQUEST,
  CONFIRM_PIN, GET_USER_PROFILE
} = auth;
const {
  signInSuccess, signInError,
  signUpSuccess, signUpError, pinError,
  setIsLoading, confirmPinSuccess,
  signOut,
  getUserProfile: getUserProfileRequest
} = authActions;
const { startLoading, stopLoading, showNetworkError } = UIActions;
const networkErrorMessage = 'No internet connection detected';
const authDBCalls = {
  signUp: async (data) => {
    const response = await sendData(`${apiKey}/auth/signup`, data);
    return response
  },
  signIn: async (data) => {
    const response = await sendData(`${apiKey}/auth/login`, data);
    console.log('login response',  response)
    return response.user_data
  },
  confirmPin: async (data) => {
    const response = await sendData(`${apiKey}/auth/activate`, data);
    return response
  },
  getUserProfile: async (token) => {
    const response = await getData(`${apiKey}/user/profile`, token);
    return response.user
  }
}

// All generators*
function* signUp({ payload: { data, redirect } }) {
  try {
    yield put(setIsLoading(true))
    yield call(authDBCalls.signUp, data);
    yield put(signUpSuccess(data.email));
    yield redirect('/auth/activate')
  } catch (err) {
    const { status, title } = err;
    let errorMessage;
    if(status) {
      if(title.email) {
        errorMessage = title.email[0]
      }
    } else {
      errorMessage = networkErrorMessage
    }
    console.log('error found', err);
    yield put(signUpError(errorMessage));
  }
}

function* signIn({ payload: { data, redirect } }) {
  try {
    yield put(setIsLoading(true))
    const { access_token, user } = yield call(authDBCalls.signIn, data);
    yield put(signInSuccess(user, access_token));
    yield redirect('/account')
  } catch (err) {
    const { status, title } = err;
    let errorMessage;
    if(status) {
      if(status === 400) errorMessage = title;
      if(status === 422) errorMessage = 'Invalid email or password';
      if(status === 401) {
        yield put(pinError(title))
        redirect('/auth/activate');
      }
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
    yield redirect('/auth/signin')
  } catch (err) {
    console.log('error found', err);
    const { status, title } = err;
    const errorMessage = status
      ? title
      : networkErrorMessage
    yield put(pinError(errorMessage))
  }
}

function* getUserProfile({ payload: { token, redirect } }){
  try {
    yield put(startLoading())
    const profile = yield call(authDBCalls.getUserProfile, token);
    console.log('returned getProfile response', profile)
    yield put(signInSuccess(profile, token))
    yield put(stopLoading())
  } catch (err) {
    console.log('error found', err);
    const { status, title, message } = err;
    if(message) return yield put(signOut())
    if(!status) {
      yield call(networkError, getUserProfileRequest(token, redirect));
      return
    }
    yield put(stopLoading())
    yield put(pinError(title))
  }
}

function* signUpWatcher() {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}

function* signInWatcher() {
  yield takeLatest(SIGN_IN_REQUEST, signIn)
}

function* confirmPinWatcher() {
  yield takeLatest(CONFIRM_PIN, confirmPin)
}

function* getUserProfileWatcher() {
  yield takeLatest(GET_USER_PROFILE, getUserProfile)
}

export default function* authSagas() {
  yield spawn(signUpWatcher)
  yield spawn(signInWatcher)
  yield spawn(confirmPinWatcher)
  yield spawn(getUserProfileWatcher)
}