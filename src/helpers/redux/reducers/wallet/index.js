import { auth, wallet } from '../../types';

const {
  GET_WALLET_SUCCESS,
  SET_PIN_SUCCESS, GET_WALLET_HISTORY_SUCCESS,
  GET_WITHDRAWAL_REQUESTS_SUCCESS, GET_WALLET_FAILURE,
  GET_WALLET_HISTORY_FAILURE, REQUEST_WITHDRAWAL_FAILURE,
  GET_WITHDRAWAL_REQUESTS_FAILURE, SET_PIN_FAILURE
} = wallet;

const initialState = {
 wallet: {

 },
 history: [],
 withdrawalRequests: [],
 errors: {
   getWallet: '',
   updateProfile: '',
   changePassword: '',
   bankInfo: ''
 },
 success: {
   pin: ''
 }
}
const walletReducer = (prevState = initialState, { type, payload }) => {
  switch(type) {
    case GET_WALLET_SUCCESS:
      return { ...prevState, wallet: payload.wallet }
    case GET_WALLET_FAILURE:
      prevState.errors.getWallet = payload.error;
      return prevState
    case SET_PIN_SUCCESS:
      return prevState;
    case GET_WALLET_HISTORY_SUCCESS:
      return { ...prevState, history: payload.walletHistory }
    case GET_WITHDRAWAL_REQUESTS_SUCCESS:
      return { ...prevState, withdrawalRequests: payload.requests}
    default:
      return prevState;
  }
}

export default walletReducer;
