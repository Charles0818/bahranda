import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { auth } from '../../types';
import { authActions, UIActions } from '../../actions';
import { networkError, unAuthenticatedError } from '../reusables';
import { sendData, getData, deleteData, apiKey } from '../ajax';
const {
  SIGN_IN_REQUEST, SIGN_UP_REQUEST,
  CONFIRM_PIN, GET_USER_PROFILE,
  CHECK_PIN_REQUEST, RESET_PASSWORD_REQUEST, FORGOT_PASSWORD_REQUEST
} = auth;
const {
  signInSuccess, signInError,
  signUpSuccess, signUpError, pinError,
  setIsLoading, confirmPinSuccess,
  signOut, resetPasswordSuccess,
  checkPinSuccess, checkPinFailure,
  resetPasswordFailure, checkPinRequest,
  resetPasswordRequest, signInRequest,
  signUpRequest, forgotPasswordSuccess,
  forgotPasswordRequest, forgotPasswordFailure,
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
    return response.user_data
  },
  confirmPin: async (data) => {
    const response = await sendData(`${apiKey}/auth/activate`, data);
    return response
  },
  getUserProfile: async (token) => {
    const response = await getData(`${apiKey}/user/profile`, token);
    return response.user
  },
  checkPin: async (data) => {
    const response = await sendData(`${apiKey}/auth/check-pin`, data);
    return response
  },
  forgotPassword: async (data) => {
    const response = await sendData(`${apiKey}/auth/forgot-password`, data);
    return response
  },
  resetPassword: async (data) => {
    const response = await sendData(`${apiKey}/auth/change-password`, data);
    return response
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
    yield call(unAuthenticatedError, err)
    // if(message) {
    //   yield put(stopLoading());
    //   yield put(signOut());
    //   return
    // }
    if(!status || !message) {
      console.log('error has no message')
      yield call(networkError, getUserProfileRequest(token, redirect));
      return
    }
    yield put(stopLoading())
  }
}

function* checkPin({ payload: { data, redirect } }){
  try {
    yield put(setIsLoading(true))
    const profile = yield call(authDBCalls.checkPin, data);
    console.log('returned checkPin response', profile);
    yield put(checkPinSuccess(data.email, data.pin));
    redirect('/auth/reset-password')
  } catch (err) {
    console.log('error found', err);
    const { status, title } = err;
    if(!status) {
      console.log('error has no message')
      yield call(networkError, checkPinRequest(data, redirect));
      return
    }
    yield put(checkPinFailure(title))
  }
}

function* resetPassword({ payload: { data, redirect } }){
  try {
    yield put(setIsLoading(true))
    const profile = yield call(authDBCalls.resetPassword, data);
    console.log('returned getProfile response', profile)
    yield put(resetPasswordSuccess())
    redirect('/auth/signin')
  } catch (err) {
    console.log('error found', err);
    const { status, title, message } = err;
    if(!status) {
      console.log('error has no message')
      yield call(networkError, resetPasswordRequest(data, redirect));
      return
    }
    yield put(resetPasswordFailure(title))
  }
}

function* forgotPassword({ payload: { data, redirect }}) {
  try {
    yield put(setIsLoading(true))
    yield call(authDBCalls.forgotPassword, data);
    yield put(forgotPasswordSuccess(data.email));
     redirect ('/auth/pin/verify')
  }
  catch (err) {
    const { message, errors } = err;
    console.log('error found', err)
    if(!message) {
      console.log("error has no message")
      yield call(networkError, forgotPasswordRequest(data, redirect));
      return
    } else {
      yield put(forgotPasswordFailure('The provided email is invalid'))
    }
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

function* checkPinWatcher() {
  yield takeLatest(CHECK_PIN_REQUEST, checkPin)
}

function* resetPasswordWatcher() {
  yield takeLatest(RESET_PASSWORD_REQUEST, resetPassword)
}

function* forgotPasswordWatcher() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword)
}

export default function* authSagas() {
  yield spawn(signUpWatcher)
  yield spawn(signInWatcher)
  yield spawn(confirmPinWatcher)
  yield spawn(getUserProfileWatcher)
  yield spawn(checkPinWatcher)
  yield spawn(resetPasswordWatcher)
  yield spawn(forgotPasswordWatcher)
}