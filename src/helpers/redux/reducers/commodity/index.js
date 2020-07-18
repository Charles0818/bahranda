import { commodity } from '../../types';
const {
  GET_COMMODITIES_SUCCESS,
  GET_COMMODITIES_FAILURE,
  INCREMENT_PAGENUM,
  GET_SINGLE_COMMODITY_SUCCESS,
  GET_SINGLE_COMMODITY_FAILURE,

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
}
const commodityReducer = (prevState = initialState, { type, payload }) => {
  switch(type) {
    case GET_COMMODITIES_SUCCESS:
      const { commodities, pageNum, hasNextPage } = payload;
      prevState.commodities = [...prevState.commodities, ...commodities];
      if(prevState.firstFetch) prevState.firstFetch = false;
      return { ...prevState, pageNum, hasNextPage, isLoading: false }
    case INCREMENT_PAGENUM:
    return { ...prevState, pageNum: prevState.pageNum++, isLoading: true }
    default:
      return prevState;
      // case  GET_SINGLE_COMMODITY_SUCCESS:
      //   const {

      //   }
  }
}

export default commodityReducer;
