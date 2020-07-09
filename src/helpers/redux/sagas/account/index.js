import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { account } from '../../types';
import { accountActions } from '../../actions';
import { sendData, getData, modifyData, deleteData, apiKey } from '../ajax';
const {
  GET_ACCOUNT_DASHBOARD_REQUEST,
  UPDATE_PROFILE_REQUEST,
  CHANGE_PASSWORD_REQUEST
} = account;

const {
  getAccountDashboardSuccess, getAccountDashboardFailure,
  changePasswordFailure, updateProfileFailure,
  changePasswordSuccess, updateProfileSuccess
} = accountActions;

const networkErrorMessage = 'No internet connection detected';
const accountDBCalls = {
  getAccountDashboard: async (token) => {
    const response = await getData(`${apiKey}/user/home`, token);
    return response.data
  },
  changePassword: async ({ data, token }) => {
    const response = await sendData(`${apiKey}/user/home`, data, token);
    return response
  },
  updateProfile: async ({ data, token }) => {
    const response = await modifyData(`${apiKey}/user/home`, data, token);
    return response
  }
}

// All generators*
function* getAccountDashboard({ payload: { token } }) {
  try {
    console.log('this function was called')
    const dashboard = yield call(accountDBCalls.getAccountDashboard, token);
    yield put(getAccountDashboardSuccess(dashboard));
  } catch (err) {
    const { errors } = err;
    const errorMessage = errors
      ? errors[0].status === 404
      ? 'A user with the provided credentials does not exists'
      : errors[0].title
      : networkErrorMessage
    console.log('error found', err);
    yield put(getAccountDashboardFailure(errorMessage))
  }
}

function* updateProfile({ payload: { data, token } }) {
  try {
    const profile = yield call(accountDBCalls.updateProfile, data, token);
    yield put(updateProfileSuccess(profile));

  } catch (err) {
    const { errors } = err;
    const errorMessage = errors
      ? errors[0].status === 404
      ? 'A user with the provided credentials does not exists'
      : errors[0].title
      : networkErrorMessage
    console.log('error found', err);
    yield put(updateProfileFailure(errorMessage))
  }
}

function* changePassword({ payload: { data, token } }) {
  try {
    const message = yield call(accountDBCalls.changePassword, data, token);
    yield put(changePasswordSuccess(message));

  } catch (err) {
    const { errors } = err;
    const errorMessage = errors
      ? errors[0].status === 404
      ? 'A user with the provided credentials does not exists'
      : errors[0].title
      : networkErrorMessage
    console.log('error found', err);
    yield put(changePasswordFailure(errorMessage))
  }
}

function* getAccountDashboardRequest() {
  yield takeLatest(GET_ACCOUNT_DASHBOARD_REQUEST, getAccountDashboard)
}

function* updateProfileRequest() {
  yield takeLatest(UPDATE_PROFILE_REQUEST, updateProfile)
}

function* changePasswordRequest() {
  yield takeLatest(CHANGE_PASSWORD_REQUEST, changePassword)
}

export default function* accountSagas() {
  yield spawn(getAccountDashboardRequest)
  yield spawn(updateProfileRequest)
  yield spawn(changePasswordRequest)
}