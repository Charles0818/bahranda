import { wallet, auth } from '../../types';

const {
  GET_WALLET_SUCCESS,
  SET_PIN_SUCCESS, GET_WALLET_HISTORY_SUCCESS,
  GET_WALLET_REQUESTS_SUCCESS, GET_WALLET_FAILURE,
  GET_WALLET_HISTORY_FAILURE, REQUEST_WITHDRAWAL_FAILURE,
  REQUEST_WITHDRAWAL_SUCCESS, REQUEST_WITHDRAWAL_INDICATOR,
  GET_WALLET_REQUESTS_FAILURE, SET_PIN_FAILURE,
  UPDATE_BANK_INFO_FAILURE, UPDATE_BANK_INFO_INDICATOR,
  UPDATE_BANK_INFO_SUCCESS, GET_WALLET_INDICATOR,
  GET_WALLET_HISTORY_INDICATOR, SET_PIN_INDICATOR,
  INCREMENT_WALLET_HISTORY_PAGENUM
} = wallet;

const { SIGN_OUT } = auth;

const initialState = () => {
  return  {
    wallet: { },
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
      requestWithdrawal: false,
    }
  }
}
const walletReducer = (prevState = initialState(), { type, payload }) => {
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
    case SET_PIN_INDICATOR:
      prevState.loadingIndicators.setPin = true;
      return { ...prevState }
    case SET_PIN_SUCCESS:
      prevState.loadingIndicators.setPin = false;
      prevState.success.setPin = payload.message
      return {...prevState};
    case SET_PIN_FAILURE:
      prevState.loadingIndicators.setPin = false;
      prevState.errors.setPin = payload.error;
      return {...prevState};
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
      prevState.loadingIndicators.bankInfo = false;
      prevState.success.bankInfo = payload.message
      const { account_name, account_no, bank_name } = payload.bankInfo;
      prevState.bankInfo = { account_name, account_no, bank_name }
      return {...prevState};
    case UPDATE_BANK_INFO_FAILURE:
      prevState.loadingIndicators.bankInfo = false
      prevState.errors.bankInfo = payload.error;
      return { ...prevState }
    case REQUEST_WITHDRAWAL_INDICATOR:
      prevState.loadingIndicators.requestWithdrawal = true;
      return { ...prevState }
    case REQUEST_WITHDRAWAL_SUCCESS:
      const walletRequests = [payload.request, ...prevState.walletRequests];
      prevState.success.requestWithdrawal = payload.message;
      prevState.loadingIndicators.requestWithdrawal = false;
      return { ...prevState, walletRequests }
    case REQUEST_WITHDRAWAL_FAILURE:
      prevState.errors.requestWithdrawal = payload.error;
      console.log('failed withdrawal request', payload.error)
      prevState.loadingIndicators.requestWithdrawal = false
      return { ...prevState }
    case SIGN_OUT:
      return initialState()
    default:
      return prevState;
  }
}

export default walletReducer;
