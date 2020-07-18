import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { wallet } from '../../types';
import { walletActions, UIActions } from '../../actions';
import { sendData, getData, modifyData, deleteData, apiKey } from '../ajax';
const {
  UPDATE_BANK_INFO_REQUEST, GET_WALLET_HISTORY_REQUEST,
  REQUEST_WITHDRAWAL_REQUEST, GET_WALLET_REQUESTS,
  GET_WALLET_REQUEST, SET_PIN_REQUEST,
  UPDATE_BANK_INFO_INDICATOR, GET_WALLET_INDICATOR,
  GET_WALLET_HISTORY_INDICATOR
} = wallet;
const { showNetworkError } = UIActions;
const {
  getWalletFailure, getWalletSuccess,
  getWalletHistoryFailure, getWalletHistorySuccess,
  getWalletRequestsFailure,getWalletRequestsSuccess,
  requestWithdrawalSuccess, requestWithdrawalFailure,
  updateBankInfoFailure, updateBankInfoSuccess,
  setPinRequest, setPinSuccess, setPinFailure
} = walletActions;

const networkErrorMessage = 'No internet connection detected';
const walletDBCalls = {
  getWallet: async (token) => {
    const response = await getData(`${apiKey}/user/wallet`, token);
    console.log('wallet gotten', response)
    return response
  },
  getWalletHistory: async ({ pageNum, token }) => {
    const response = await getData(`${apiKey}/user/wallet/wallet-history?page=${pageNum}`, token);
    console.log('wallet history gotten', response)
    return response.wallet_histories
  },
  getWalletRequests: async (token) => {
    const response = await getData(`${apiKey}/user/wallet/wallet-requests`, token);
    console.log('wallet requests gotten', response)
    return response
  },
  requestWithdrawal: async ({data, token}) => {
    const response = await sendData(`${apiKey}/user/wallet/request-withdrawal`, data, token);
    console.log('withdrawal request succes', response)
    return response
  },
  setPin: async ({data, token}) => {
    const response = await modifyData(`${apiKey}/user/wallet/set-pin`, data, token);
    console.log('wallet history gotten', response)
    return response
  },
  updateBankInfo: async ({ data, token }) => {
    const response = await modifyData(`${apiKey}/user/wallet/wallet-information`, data, token);
    console.log('updateBankInfo response', response)
    return response
  }
}

// All generators*
function* getWallet({ payload: { token } }) {
  try {
    yield put({ type: GET_WALLET_INDICATOR })
    const { wallet_details } = yield call(walletDBCalls.getWallet, token);
    yield put(getWalletSuccess(wallet_details));
  } catch (err) {
    const { title } = err;
    const errorMessage = title
      ? title
      : networkErrorMessage
    console.log('error found', err);
    yield put(getWalletFailure(errorMessage))
  }
}

function* getWalletHistory({ payload }) {
  try {
    yield put({ type: GET_WALLET_HISTORY_INDICATOR })
    const { current_page, data: history } = yield call(walletDBCalls.getWalletHistory, payload);
    const hasNextPage = history.length !== 0
    yield put(getWalletHistorySuccess(history, current_page, hasNextPage));
  } catch (err) {
    const { title } = err;
    const errorMessage = title
      ? title
      : networkErrorMessage
    console.log('error found', err);
    yield put(getWalletHistoryFailure(errorMessage))
  }
}

function* getWalletRequests({ payload: { token } }) {
  try {
    const requests = yield call(walletDBCalls.getWalletRequests, token);
    yield put(getWalletRequestsSuccess(requests));
  } catch (err) {
    const { errors } = err;
    const errorMessage = errors
      ? errors[0].status === 404
      ? 'A user with the provided credentials does not exists'
      : errors[0].title
      : networkErrorMessage
    console.log('error found', err);
    yield put(getWalletRequestsFailure(errorMessage))
  }
}

function* updateBankInfo({ payload }) {
  try {
    yield put({ type: UPDATE_BANK_INFO_INDICATOR })
    const bankInfo = yield call(walletDBCalls.updateBankInfo, payload);
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

function* updateBankInfoRequest() {
  yield takeLatest(UPDATE_BANK_INFO_REQUEST, updateBankInfo)
}

function* getWalletRequest() {
  yield takeLatest(GET_WALLET_REQUEST, getWallet)
}

function* watchGetWalletRequests() {
  yield takeLatest(GET_WALLET_REQUESTS, getWalletRequests)
}

function* getWalletHistoryRequest() {
  yield takeLatest(GET_WALLET_HISTORY_REQUEST, getWalletHistory)
}

export default function* walletSagas() {
  yield spawn(updateBankInfoRequest)
  yield spawn(getWalletRequest)
  yield spawn(getWalletHistoryRequest)
  yield spawn(watchGetWalletRequests)
}