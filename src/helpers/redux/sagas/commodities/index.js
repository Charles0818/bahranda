import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { commodity } from '../../types';
import { commodityActions } from '../../actions';
import { sendData, getData, modifyData, deleteData, apiKey } from '../ajax';
const { GET_COMMODITIES_REQUEST, GET_SINGLE_COMMODITY_REQUEST } = commodity;

const {
  getCommoditiesSuccess, getCommoditiesFailure, getSingleCommoditySuccess, getSingleCommodityFailure
} = commodityActions;

const networkErrorMessage = 'No internet connection detected';
const commodityDBCalls = {
  getCommodities: async ({pageNum, token}) => {
    const { commodities: data } = await getData(`${apiKey}/user/commodities/fetch?page=${pageNum}`, token);
    return data
  },
  getSingleCommodity: async ({token, id }) => {
    console.log(token)
    const { commodity } = await getData(`${apiKey}/user/commodities/${id}/show`, token);
    console.log("commodity details", commodity);
    console.log(id)
    return commodity;
  }
}

// All generators*
function* getCommodities({ payload }) {
  try {
    console.log('this function was called')
    const { data: commodities, meta: { current_page } } = yield call(commodityDBCalls.getCommodities, payload);
    const hasNextPage = commodities.length !== 0
    console.log('commodity data', commodities)
    yield put(getCommoditiesSuccess(commodities, current_page, hasNextPage));
  } catch (err) {
    const { errors } = err;
    const errorMessage = errors
      ? errors[0].status === 404
      ? 'A user with the provided credentials does not exists'
      : errors[0].title
      : networkErrorMessage
    console.log('error found', err);
    yield put(getCommoditiesFailure(errorMessage))
  }
}

function* getCommoditiesRequest() {
  yield takeLatest(GET_COMMODITIES_REQUEST, getCommodities)
}

// Single commodity generator
function* getSingleCommodity ({ payload: { token, setDetails, id} }) {
  try {
    console.log("single commodity generator")
    // console.log(id)
    const { commodity } = yield call(commodityDBCalls.getSingleCommodity,{ token,  id });
      console.log('commodity info', commodity)
      // console.log(id)
      yield put(getSingleCommoditySuccess(commodity));
      setDetails();
    }
    
     catch (err) {
        const { errors } = err;
        const errorMessage = errors
          ? errors[0].status === 404
          ? 'A user with the provided credentials does not exists'
          : errors[0].title
          : networkErrorMessage
        console.log('error found', err);
        yield put(getSingleCommodityFailure(errorMessage))
      }
    }

    function* getSingeCommodityRequest() {
      yield takeLatest (GET_SINGLE_COMMODITY_REQUEST, getSingleCommodity)
    }

    export default function* commoditySagas() {
      yield spawn(getCommoditiesRequest)
      yield spawn(getSingeCommodityRequest)

    }

    
