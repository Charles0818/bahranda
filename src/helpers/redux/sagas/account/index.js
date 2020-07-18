import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { delay } from '../reusables';
import { account } from '../../types';
import { accountActions, UIActions, authActions } from '../../actions';
import { signOut } from '../../actions/auth';
import { sendData, getData, modifyData, deleteData, apiKey } from '../ajax';
const {
  GET_ACCOUNT_DASHBOARD_REQUEST,
  UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_INDICATOR,
  CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_INDICATOR,
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
    const response = await modifyData(`${apiKey}/user/profile/password/change`, data, token);
    console.log('ChangePassord response', response)
    return response
  },
  updateProfile: async ({ data, token }) => {
    console.log('update profile endpoint was triggered')
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

function* updateProfile({ payload }) {
  try {
    console.log('update profile saga effect was triggered')
    yield put({ type: UPDATE_PROFILE_INDICATOR })
    yield call(accountDBCalls.updateProfile, payload);
    yield put(updateProfileSuccess(payload.data, 'Profile updated successfully'));
    yield call(delay, 3000)
    yield put(updateProfileSuccess(payload.data, ''));
  } catch (err) {
    const { title } = err;
    const errorMessage = title
      ? title
      : networkErrorMessage
    console.log('error found', err);
    yield put(updateProfileFailure(errorMessage));
    yield call(delay, 3000);
    yield put(updateProfileFailure(''));
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
    yield put({ type: CHANGE_PASSWORD_INDICATOR })
    const { title } = yield call(accountDBCalls.changePassword, payload);
    yield put(changePasswordSuccess(title));
    yield call(delay, 3000)
    yield put(changePasswordSuccess(''));
  } catch (err) {
    const { status, title } = err;
    const errorMessage = status
      ? title
      : networkErrorMessage
    console.log('error found', err);
    yield put(changePasswordFailure(errorMessage));
    yield call(delay, 3000)
    yield put(changePasswordFailure(''));
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