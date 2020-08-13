import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { commodity } from '../../types';
import { commodityActions } from '../../actions';
import { unAuthenticatedError, delay, networkError } from '../reusables';
import { sendData, getData, apiKey } from '../ajax';
const {
  GET_COMMODITIES_REQUEST, GET_RELATED_COMMODITIES,
  PURCHASE_COMMODITY_INDICATOR, PURCHASE_COMMODITY_REQUEST,
  GET_SINGLE_COMMODITY_REQUEST, GET_SINGLE_COMMODITY_INDICATOR,
  GET_RELATED_COMMODITIES_INDICATOR, GET_LATEST_COMMODITIES_REQUEST,
  GET_LATEST_COMMODITIES_INDICATOR
} = commodity;

const {
  getCommoditiesSuccess, getCommoditiesFailure,
  getSingleCommoditySuccess, getSingleCommodityFailure,
  purchaseCommodityFailure, purchaseCommoditySuccess,
  getRelatedCommoditiesFailure, getRelatedCommoditiesSuccess,
  getLatestCommoditiesSuccess, getLatestCommoditiesFailure,
  purchaseCommodityRequest, getSingleCommodityRequest
} = commodityActions;

const networkErrorMessage = 'No internet connection detected';
const commodityDBCalls = {
  getCommodities: async ({pageNum, token}) => {
    const { commodities: data } = await getData(`${apiKey}/user/commodities/fetch?page=${pageNum}`, token);
    return data
  },
  getRelatedCommodities: async ({ token }) => {
    const data = await getData(`${apiKey}/user/commodities/related-commodities`, token);
    return data.commodities
  },
  purchaseCommodity: async ({ data, token }) => {
    const response = await sendData(`${apiKey}/user/commodities/purchase`, data, token);
    console.log('purchase commodity success', response);
    return response
  },
  getSingleCommodity: async ({token, id }) => {
    const { commodity } = await getData(`${apiKey}/user/commodities/${id}/show`, token);
    return commodity;
  },
  getLatestCommodities: async () => {
    const commodities = await getData(`${apiKey}/user/commodities/show`);
    return commodities;
  }
}

// All generators*
function* getCommodities({ payload }) {
  try {
    const { data: commodities, meta: { current_page } } = yield call(commodityDBCalls.getCommodities, payload);
    const hasNextPage = commodities.length !== 0
    yield put(getCommoditiesSuccess(commodities, current_page, hasNextPage));
  } catch (err) {
    const { status, title } = err;
    yield call(unAuthenticatedError, err)
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
    yield call(unAuthenticatedError, err)
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
     yield call(commodityDBCalls.purchaseCommodity, payload);
    yield put(purchaseCommoditySuccess('successful'));
    yield call(delay, 3000);
    yield put(purchaseCommoditySuccess(''));
  } catch (err) {
    const { status, title } = err;
    yield call(unAuthenticatedError, err);
    if(!status) {
      yield call(networkError, purchaseCommodityRequest(payload.data, payload.token));
      return
    }
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
    setDetails(commodity);
    yield put(getSingleCommoditySuccess())
  } catch (err) {
    const { status } = err;
    yield call(unAuthenticatedError, err)
    if(!status) {
      yield call(networkError, getSingleCommodityRequest(token, setDetails, id));
      return
    }
    const errorMessage = status && status === 404
      ? status
      : networkErrorMessage
    console.log('error found', err);
    yield put(getSingleCommodityFailure(errorMessage))
  }
}

function* getLatestCommodities () {
  try {
    yield put({ type: GET_LATEST_COMMODITIES_INDICATOR })
    const commodities = yield call(commodityDBCalls.getLatestCommodities);
    yield put(getLatestCommoditiesSuccess(commodities))
  } catch (err) {
    const { status, title } = err;
    const errorMessage = status
      ? title
      : networkErrorMessage
    console.log('error found', err);
    yield put(getLatestCommoditiesFailure(errorMessage))
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

function* getLatestCommoditiesWatcher() {
  yield takeLatest(GET_LATEST_COMMODITIES_REQUEST, getLatestCommodities)
}
export default function* commoditySagas() {
  yield spawn(getCommoditiesRequest)
  yield spawn(getRelatedCommoditiesWatcher)
  yield spawn(purchaseCommodityWatcher)
  yield spawn(getSingeCommodityWatcher)
  yield spawn(getLatestCommoditiesWatcher)
}
