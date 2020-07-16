import { wallet } from '../../types';
const {
  GET_WALLET_FAILURE, GET_WALLET_REQUEST,
  GET_WALLET_SUCCESS, GET_WALLET_HISTORY_FAILURE,
  GET_WALLET_HISTORY_REQUEST, GET_WALLET_HISTORY_SUCCESS,
  REQUEST_WITHDRAWAL_FAILURE, REQUEST_WITHDRAWAL_REQUEST,
  REQUEST_WITHDRAWAL_SUCCESS, GET_WITHDRAWAL_REQUESTS,
  GET_WITHDRAWAL_REQUESTS_FAILURE, GET_WITHDRAWAL_REQUESTS_SUCCESS
  // GET_WITHDRAWAL_REQUESTS
} = wallet;

export const getWalletRequest = (token) => {
  return {
    type: GET_WALLET_REQUEST,
    payload: { token }
  }
}

export const getWalletSuccess = (wallet) => {
  return {
    type: GET_WALLET_SUCCESS,
    payload: { wallet }
  }
}

export const getWalletFailure = (error) => {
  return {
    type: GET_WALLET_FAILURE,
    payload: { error }
  }
}

export const getWalletHistoryRequest = (token) => {
  return {
    type: GET_WALLET_HISTORY_REQUEST,
    payload: { token }
  }
}

export const getWalletHistorySuccess = (walletHistory) => {
  return {
    type: GET_WALLET_HISTORY_SUCCESS,
    payload: { walletHistory }
  }
}

export const getWalletHistoryFailure = (error) => {
  return {
    type: GET_WALLET_HISTORY_FAILURE,
    payload: { error }
  }
}

export const requestWithdrawalRequest = (data, token) => {
  return {
    type: REQUEST_WITHDRAWAL_REQUEST,
    payload: { data, token }
  }
}

export const requestWithdrawalSuccess = (request) => {
  return {
    type: REQUEST_WITHDRAWAL_SUCCESS,
    payload: { request }
  }
}

export const requestWithdrawalFailure = (error) => {
  return {
    type: REQUEST_WITHDRAWAL_FAILURE,
    payload: { error }
  }
}

export const getWithdrawalRequests = (token) => {
  return {
    type: GET_WITHDRAWAL_REQUESTS,
    payload: { token }
  }
}

export const getWithdrawalRequestsSuccess = (requests) => {
  return {
    type: GET_WITHDRAWAL_REQUESTS_SUCCESS,
    payload: { requests }
  }
}

export const getWithdrawalRequestsFailure = (error) => {
  return {
    type: GET_WITHDRAWAL_REQUESTS_FAILURE,
    payload: { error }
  }
}
