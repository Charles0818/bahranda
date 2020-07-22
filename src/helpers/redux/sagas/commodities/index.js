import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { commodity } from '../../types';
import { commodityActions } from '../../actions';
import { sendData, getData, modifyData, deleteData, apiKey } from '../ajax';
const {
  GET_COMMODITIES_REQUEST, GET_RELATED_COMMODITIES,
  PURCHASE_COMMODITY_INDICATOR, PURCHASE_COMMODITY_REQUEST,
  GET_SINGLE_COMMODITY_REQUEST, GET_SINGLE_COMMODITY_INDICATOR,
  GET_RELATED_COMMODITIES_INDICATOR
} = commodity;


const {
  getCommoditiesSuccess, getCommoditiesFailure,
  getSingleCommoditySuccess, getSingleCommodityFailure,
  purchaseCommodityFailure, purchaseCommoditySuccess,
  getRelatedCommoditiesFailure, getRelatedCommoditiesSuccess
} = commodityActions;

const networkErrorMessage = 'No internet connection detected';
const commodityDBCalls = {
  getCommodities: async ({pageNum, token}) => {
    const { commodities: data } = await getData(`${apiKey}/user/commodities/fetch?page=${pageNum}`, token);
    return data
  },
  getRelatedCommodities: async ({ token }) => {
    const data = await getData(`${apiKey}/user/commodities/related-commodities`, token);
    console.log('related commodities', data)
    return data.commodities
  },
  purchaseCommodity: async ({ data, token }) => {
    const response = await sendData(`${apiKey}/user/commodities/purchase`, data, token);
    return response
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
    const { status, title } = err;
    const errorMessage = status
      ? title
      : networkErrorMessage
    console.log('error found', err);
    yield put(getCommoditiesFailure(errorMessage))
  }
}

function* getRelatedCommodities({ payload: { token, setState } }) {
  try {
    yield put({ type: GET_RELATED_COMMODITIES_INDICATOR })
    const relatedCommodities = yield call(commodityDBCalls.getRelatedCommodities, { token })
    setState(relatedCommodities);
    yield put(getRelatedCommoditiesSuccess())
  } catch (err) {
    const { status, title } = err;
    const errorMessage = status
      ? title
      : networkErrorMessage
    console.log('error found', err);
    yield put(getRelatedCommoditiesFailure(errorMessage))
  }
}


function* purchaseCommodity({ payload }) {
  try {
    yield put({ type: PURCHASE_COMMODITY_INDICATOR })
    const deal = yield call(commodityDBCalls.purchaseCommodity, payload);
    yield put(purchaseCommoditySuccess(deal))
  } catch (err) {
    const { status, title } = err;
    const errorMessage = status
      ? title
      : networkErrorMessage
    console.log('error found', err);
    yield put(purchaseCommodityFailure(errorMessage))
  }
}

function* getSingleCommodity ({ payload: { token, setDetails, id } }) {
  try {
    yield put({ type: GET_SINGLE_COMMODITY_INDICATOR })
    const commodity = yield call(commodityDBCalls.getSingleCommodity, { token,  id });
    console.log('commodity info', commodity)
    setDetails(commodity);
    yield put(getSingleCommoditySuccess())
  } catch (err) {
    const { status, title } = err;
    const errorMessage = status
      ? title
      : networkErrorMessage
    console.log('error found', err);
    yield put(getSingleCommodityFailure(errorMessage))
  }
}

function* getCommoditiesRequest() {
  yield takeLatest(GET_COMMODITIES_REQUEST, getCommodities)
}

function* getRelatedCommoditiesWatcher() {
  yield takeLatest(GET_RELATED_COMMODITIES, getRelatedCommodities)
}

function* purchaseCommodityWatcher() {
  yield takeLatest(PURCHASE_COMMODITY_REQUEST, purchaseCommodity)
}

function* getSingeCommodityWatcher() {
  yield takeLatest(GET_SINGLE_COMMODITY_REQUEST, getSingleCommodity)
}

export default function* commoditySagas() {
  yield spawn(getCommoditiesRequest)
  yield spawn(getRelatedCommoditiesWatcher)
  yield spawn(purchaseCommodityWatcher)
  yield spawn(getSingeCommodityWatcher)
}
