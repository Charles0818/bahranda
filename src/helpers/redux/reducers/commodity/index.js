import { commodity } from '../../types';
const {
  GET_COMMODITIES_SUCCESS, GET_COMMODITIES_FAILURE,
  INCREMENT_PAGENUM, GET_SINGLE_COMMODITY_SUCCESS,
  GET_SINGLE_COMMODITY_FAILURE, GET_RELATED_COMMODITIES_INDICATOR,
  GET_SINGLE_COMMODITY_INDICATOR, GET_RELATED_COMMODITIES_SUCCESS,
  GET_RELATED_COMMODITIES_FAILURE, PURCHASE_COMMODITY_INDICATOR,
  PURCHASE_COMMODITY_SUCCESS, PURCHASE_COMMODITY_FAILURE

} = commodity;
const initialState = {
  commodities: [],
  pageNum: 1,
  hasNextPage: true,
  error: {
    get: '',
  },
  isLoading: false,
  firstFetch: true,
  loadingIndicators: {
    singleCommodity: false,
    relatedCommodity: false,
    purchaseCommodity: false
  }
}
const commodityReducer = (prevState = initialState, { type, payload }) => {
  switch(type) {
    case GET_COMMODITIES_SUCCESS:
      const { commodities, pageNum, hasNextPage } = payload;
      prevState.commodities = [...prevState.commodities, ...commodities];
      if(prevState.firstFetch) prevState.firstFetch = false;
      return { ...prevState, pageNum, hasNextPage, isLoading: false }
    case INCREMENT_PAGENUM:
      return { ...prevState, pageNum: prevState.pageNum + 1, isLoading: true }
    case GET_SINGLE_COMMODITY_INDICATOR:
      prevState.loadingIndicators.singleCommodity = true;
      return { ...prevState }
    case GET_SINGLE_COMMODITY_SUCCESS:
      prevState.loadingIndicators.singleCommodity = false;
      return { ...prevState }
    case GET_SINGLE_COMMODITY_FAILURE:
      prevState.loadingIndicators.singleCommodity = false;
      return { ...prevState }
    case GET_RELATED_COMMODITIES_INDICATOR:
      prevState.loadingIndicators.relatedCommodity = true;
      return { ...prevState }
    case GET_RELATED_COMMODITIES_SUCCESS:
      prevState.loadingIndicators.relatedCommodity = false;
      return { ...prevState }
    case GET_RELATED_COMMODITIES_FAILURE:
      prevState.loadingIndicators.relatedCommodity = false;
      return { ...prevState }
    case PURCHASE_COMMODITY_INDICATOR:
      prevState.loadingIndicators.purchaseCommodity = true;
      return { ...prevState }
    case PURCHASE_COMMODITY_SUCCESS:
    case PURCHASE_COMMODITY_FAILURE:
      prevState.loadingIndicators.purchaseCommodity = false;
      return { ...prevState }
    default:
      return prevState;
  }
}

export default commodityReducer;
