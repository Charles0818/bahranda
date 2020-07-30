import { commodity } from '../../types';
const {
  GET_COMMODITIES_REQUEST, GET_COMMODITIES_SUCCESS,
  GET_COMMODITIES_FAILURE, INCREMENT_PAGENUM,
  GET_SINGLE_COMMODITY_REQUEST, GET_SINGLE_COMMODITY_SUCCESS, 
  GET_SINGLE_COMMODITY_FAILURE,
  GET_RELATED_COMMODITIES, PURCHASE_COMMODITY_FAILURE,
  PURCHASE_COMMODITY_REQUEST, PURCHASE_COMMODITY_SUCCESS,
  GET_RELATED_COMMODITIES_FAILURE, GET_RELATED_COMMODITIES_SUCCESS
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

export const purchaseCommodityRequest = (data, token) => {
  return {
    type: PURCHASE_COMMODITY_REQUEST,
    payload: { data, token }
  }
}

export const purchaseCommoditySuccess = (message) => {
  return {
    type: PURCHASE_COMMODITY_SUCCESS,
    payload: { message }
  }
}

export const purchaseCommodityFailure = (error) => {
  return {
    type: PURCHASE_COMMODITY_FAILURE,
    payload: { error }
  }
}

export const getRelatedCommoditiesRequest = (token, setState) => {
  return {
    type: GET_RELATED_COMMODITIES,
    payload: { token, setState }
  }
}

export const getRelatedCommoditiesSuccess = () => {
  return {
    type: GET_RELATED_COMMODITIES_SUCCESS
  }
}

export const getRelatedCommoditiesFailure = (error) => {
  return {
    type: GET_RELATED_COMMODITIES_FAILURE,
    payload: { error }
  }
}

export const incrementPageNum = () => {
  return {
    type: INCREMENT_PAGENUM
  }
}


export const getSingleCommodityRequest = (token, setDetails, id ) => {
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
