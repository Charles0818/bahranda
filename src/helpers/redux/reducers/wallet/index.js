import { wallet } from '../../types';

const {
  GET_WALLET_SUCCESS,
  SET_PIN_SUCCESS, GET_WALLET_HISTORY_SUCCESS,
  GET_WALLET_REQUESTS_SUCCESS, GET_WALLET_FAILURE,
  GET_WALLET_HISTORY_FAILURE, REQUEST_WITHDRAWAL_FAILURE,
  REQUEST_WITHDRAWAL_SUCCESS,
  GET_WALLET_REQUESTS_FAILURE, SET_PIN_FAILURE,
  UPDATE_BANK_INFO_FAILURE, UPDATE_BANK_INFO_INDICATOR,
  UPDATE_BANK_INFO_SUCCESS, GET_WALLET_INDICATOR,
  GET_WALLET_HISTORY_INDICATOR,
  INCREMENT_WALLET_HISTORY_PAGENUM
} = wallet;

const initialState = {
  wallet: {

  },
  bankInfo: { },
  historyData: {
    history: [],
    pageNum: 1,
    hasNextPage: true,
  },
  walletRequests: [],
  errors: {
   getWallet: '',
   history: '',
   bankInfo: '',
   setPin: '',
   requestWithdrawal: ''
  },
  success: {
    setPin: '',
    requestWithdrawal: ''
  },
  loadingIndicators: {
    bankInfo: false,
    getWallet: false,
    history: false,
    bankInfo: false,
    setPin: false,
  }
}
const walletReducer = (prevState = initialState, { type, payload }) => {
  switch(type) {
    case GET_WALLET_INDICATOR:
      prevState.loadingIndicators.getWallet = true
      console.log('I got triggered for getWallet', {...prevState })
      return {...prevState }
    case GET_WALLET_SUCCESS:
      prevState.loadingIndicators.getWallet = false;
      const { bank_details: bankInfo, ...rest } = payload.wallet;
      return { ...prevState, bankInfo, wallet: rest }
    case GET_WALLET_FAILURE:
      prevState.errors.getWallet = payload.error;;
      prevState.loadingIndicators.getWallet = false
      return { ...prevState }
    case SET_PIN_SUCCESS:
      return prevState;
    case GET_WALLET_HISTORY_INDICATOR:
      prevState.loadingIndicators.history = true
      return {...prevState }
    case INCREMENT_WALLET_HISTORY_PAGENUM:
      prevState.historyData.pageNum += 1;
      return { ...prevState }
    case GET_WALLET_HISTORY_SUCCESS:
      const { walletHistory, pageNum, hasNextPage } = payload;
      console.log('this is the walletHistory from saga', walletHistory);
      const history = [...prevState.historyData.history, ...walletHistory];
      console.log('this is the single history from saga', history);
      prevState.historyData = {
        pageNum, hasNextPage,
        history
      }
      prevState.loadingIndicators.history = false
      return { ...prevState };
    case GET_WALLET_HISTORY_FAILURE:
      prevState.loadingIndicators.history = false
      prevState.errors.history = payload.error;
      return { ...prevState }
    case GET_WALLET_REQUESTS_SUCCESS:
      return { ...prevState, walletRequests: payload.requests}
    case UPDATE_BANK_INFO_INDICATOR:
      prevState.loadingIndicators.bankInfo = true
      return {...prevState }
    case UPDATE_BANK_INFO_SUCCESS:
      prevState.loadingIndicators.bankInfo = false
      prevState.bankInfo = payload.bankInfo;
      return {...prevState};
    case UPDATE_BANK_INFO_FAILURE:
      prevState.loadingIndicators.bankInfo = false
      prevState.errors.bankInfo = payload.error;
      return { ...prevState }
    case REQUEST_WITHDRAWAL_SUCCESS:
      const walletRequests = [payload.request, ...prevState.walletRequests];
      prevState.success.withdrawalRequest = payload.message
      return { ...prevState, walletRequests }
    case REQUEST_WITHDRAWAL_FAILURE:
      prevState.errors.withdrawalRequest = payload.error;
      return { ...prevState }
    default:
      return prevState;
  }
}

export default walletReducer;
