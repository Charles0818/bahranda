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