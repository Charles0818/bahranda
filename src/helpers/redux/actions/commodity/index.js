import { commodity } from '../../types';
const {
  GET_COMMODITIES_REQUEST, GET_COMMODITIES_SUCCESS,
  GET_COMMODITIES_FAILURE, INCREMENT_PAGENUM
} = commodity;

export const getCommoditiesRequest = (pageNum, token) => {
  return {
    type: GET_COMMODITIES_REQUEST,
    payload: { pageNum, token }
  }
}

export const getCommoditiesSuccess = (commodities, pageNum, hasNextPage) => {
  return {
    type: GET_COMMODITIES_SUCCESS,
    payload: { pageNum, commodities, hasNextPage }
  }
}

export const getCommoditiesFailure = (error) => {
  return {
    type: GET_COMMODITIES_FAILURE,
    payload: { error }
  }
}

export const incrementPageNum = () => {
  return {
    type: INCREMENT_PAGENUM
  }
}

// Get Single Commodity
const {
  GET_SINGLE_COMMODITY_REQUEST, GET_SINGLE_COMMODITY_SUCCESS, 
  GET_SINGLE_COMMODITY_FAILURE
} = commodity;


export const getSingleCommodityRequest = (token, setDetails, id ) => {
  console.log(id)
  return {
    type: GET_SINGLE_COMMODITY_REQUEST,
    payload: { token, setDetails, id }
  }
}

export const getSingleCommoditySuccess = (details) => {
  return {
    type: GET_SINGLE_COMMODITY_SUCCESS,
    payload: { details }
  }
}



export const getSingleCommodityFailure = (error) => {
  return {
    type:  GET_SINGLE_COMMODITY_FAILURE,
    payload: { error }
  }
} 
