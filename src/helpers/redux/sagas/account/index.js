import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { account } from '../../types';
import { accountActions, UIActions } from '../../actions';
import { sendData, getData, modifyData, deleteData, apiKey } from '../ajax';
const {
  GET_ACCOUNT_DASHBOARD_REQUEST,
  UPDATE_PROFILE_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  UPDATE_BANK_INFO_REQUEST
} = account;
const { showNetworkError } = UIActions;
const {
  getAccountDashboardSuccess, getAccountDashboardFailure,
  changePasswordFailure, updateProfileFailure,
  changePasswordSuccess, updateProfileSuccess,
  updateBankInfoFailure, updateBankInfoSuccess
} = accountActions;

const networkErrorMessage = 'No internet connection detected';
const accountDBCalls = {
  getAccountDashboard: async (token) => {
    const response = await getData(`${apiKey}/user/home`, token);
    return response.data
  },
  changePassword: async ({ data, token }) => {
    const response = await sendData(`${apiKey}/user/profile/password/change`, data, token);
    return response
  },
  updateProfile: async ({ data, token }) => {
    const response = await modifyData(`${apiKey}/user/profile/update`, data, token);
    return response
  },
  updateBankInfo: async ({ data, token }) => {
    const response = await modifyData(`${apiKey}/user/wallet/account-information`, data, token);
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

function* updateBankInfo({ payload: { data, token } }) {
  try {
    const bankInfo = yield call(accountDBCalls.updateProfile, data, token);
    yield put(updateBankInfoSuccess(bankInfo));

  } catch (err) {
    const { errors } = err;
    const errorMessage = errors
      ? errors[0].status === 404
      ? 'A user with the provided credentials does not exists'
      : errors[0].title
      : networkErrorMessage
    console.log('error found', err);
    yield put(updateBankInfoFailure(errorMessage))
  }
}

function* changePassword({ payload }) {
  try {
    const message = yield call(accountDBCalls.changePassword, payload);
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

function* updateBankInfoRequest() {
  yield takeLatest(UPDATE_BANK_INFO_REQUEST, updateBankInfo)
}

export default function* accountSagas() {
  yield spawn(getAccountDashboardRequest)
  yield spawn(updateProfileRequest)
  yield spawn(changePasswordRequest)
  yield spawn(updateBankInfoRequest)
}