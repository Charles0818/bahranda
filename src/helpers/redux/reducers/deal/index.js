import { deal, auth } from '../../types';
const {
  GET_DEALS_SUCCESS, GET_DEALS_FAILURE, GET_DEALS_INDICATOR
} = deal;
const { SIGN_OUT } = auth;
const initialState = () => {
  return {
    deals: [],
    active_deals: '',
    cancelled_deals: '',
    completed_deals: '',
    closed_deals: '',
    total_investment: '',
    total_profit: '',
    loadingIndicators: {
      getDeals: false,
    },
    errors: {
      getDeals: ''
    }
  }
}
const dealReducer = (prevState = initialState(), { type, payload }) => {
  switch(type) {
    case GET_DEALS_INDICATOR:
      prevState.loadingIndicators.getDeals = true;
      return { ...prevState };
    case GET_DEALS_SUCCESS:
      const { deals, ...rest } = payload.deals;
      prevState.loadingIndicators.getDeals = false;
      return { ...prevState, deals, ...rest };
    case GET_DEALS_FAILURE:
      prevState.errors.getDeals = payload.error;
      prevState.loadingIndicators.getDeals = false
      return { ...prevState }
    case SIGN_OUT:
      return initialState()
    default:
      return prevState;
  }
}

export default dealReducer;
