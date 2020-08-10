import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { delay, networkError, unAuthenticatedError } from '../reusables';
import { account } from '../../types';
import { accountActions, UIActions, authActions } from '../../actions';
import { signOut } from '../../actions/auth';
import { sendData, getData, modifyData, deleteData, apiKey } from '../ajax';
import { updateBankInfoRequest } from '../../actions/wallet';
const {
  GET_ACCOUNT_DASHBOARD_REQUEST,
  UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_INDICATOR,
  CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_INDICATOR,
  UPDATE_BANK_INFO_REQUEST, GET_ACCOUNT_DASHBOARD_INDICATOR
} = account;
const {
  getAccountDashboardSuccess, getAccountDashboardFailure,
  changePasswordFailure, updateProfileFailure,
  changePasswordSuccess, updateProfileSuccess,
  updateBankInfoFailure, updateBankInfoSuccess,
  changePasswordRequest, getAccountDashboardRequest,
  updateProfileRequest
} = accountActions;
const networkErrorMessage = 'No internet connection detected';
const accountDBCalls = {
  getAccountDashboard: async (token) => {
    const response = await getData(`${apiKey}/user/home`, token);
    return response.data
  },
  changePassword: async ({ data, token }) => {
    const response = await modifyData(`${apiKey}/user/profile/password/change`, data, token);
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
    yield put({ type: GET_ACCOUNT_DASHBOARD_INDICATOR })
    const dashboard = yield call(accountDBCalls.getAccountDashboard, token);
    yield put(getAccountDashboardSuccess(dashboard));
  } catch (err) {
    const { status, title } = err;
    yield call(unAuthenticatedError, err)
    if(!status) {
      yield call(networkError, getAccountDashboardRequest(token));
      return
    }
    const errorMessage = title
      ? title
      : networkErrorMessage
    console.log('error found', err);
    yield put(getAccountDashboardFailure(errorMessage))
  }
}

function* updateProfile({ payload }) {
  try {
    yield put({ type: UPDATE_PROFILE_INDICATOR })
    yield call(accountDBCalls.updateProfile, payload);
    yield put(updateProfileSuccess(payload.data, 'Profile updated successfully'));
    yield call(delay, 3000)
    yield put(updateProfileSuccess(payload.data, ''));
  } catch (err) {
    const { title } = err;
    yield call(unAuthenticatedError, err);
    if(!title) {
      yield call(networkError, updateProfileRequest(payload.data, payload.token));
      return
    }
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
    const { status, title } = err;
    yield call(unAuthenticatedError, err);
    if(!status) {
      yield call(networkError, updateBankInfoRequest(data, token));
      return
    }
    const errorMessage = status
      ? title
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
    yield call(unAuthenticatedError, err);
    if(!status) {
      yield call(networkError, changePasswordRequest(payload.data, payload.token));
      return
    }
    const errorMessage = status
      ? title
      : networkErrorMessage
    console.log('error found', err);
    yield put(changePasswordFailure(errorMessage));
    yield call(delay, 3000)
    yield put(changePasswordFailure(''));
  }
}

function* getAccountDashboardWatcher() {
  yield takeLatest(GET_ACCOUNT_DASHBOARD_REQUEST, getAccountDashboard)
}

function* updateProfileWatcher() {
  yield takeLatest(UPDATE_PROFILE_REQUEST, updateProfile)
}

function* changePasswordWatcher() {
  yield takeLatest(CHANGE_PASSWORD_REQUEST, changePassword)
}

function* updateBankInfoWatcher() {
  yield takeLatest(UPDATE_BANK_INFO_REQUEST, updateBankInfo)
}

export default function* accountSagas() {
  yield spawn(getAccountDashboardWatcher)
  yield spawn(updateProfileWatcher)
  yield spawn(changePasswordWatcher)
  yield spawn(updateBankInfoWatcher)
}
