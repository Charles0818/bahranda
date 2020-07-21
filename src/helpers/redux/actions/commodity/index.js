import { commodity } from '../../types';
const {
  GET_COMMODITIES_REQUEST, GET_COMMODITIES_SUCCESS,
  GET_COMMODITIES_FAILURE, INCREMENT_PAGENUM,
  GET_RELATED_COMMODITIES, PURCHASE_COMMODITY_FAILURE,
  PURCHASE_COMMODITY_REQUEST, PURCHASE_COMMODITY_SUCCESS
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

export const purchaseCommodityRequest = (token) => {
  return {
    type: PURCHASE_COMMODITY_REQUEST,
    payload: { token }
  }
}

export const purchaseCommoditySuccess = (deal) => {
  return {
    type: PURCHASE_COMMODITY_SUCCESS,
    payload: { deal }
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
export const incrementPageNum = () => {
  return {
    type: INCREMENT_PAGENUM
  }
}
