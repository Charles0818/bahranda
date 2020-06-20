import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { account } from '../../types';
import { serviceActions } from '../actions';
import { sendData, getData, deleteData, apiKey } from './ajax';

const accountDBCalls = {
  addService: async (data) => {
    const response = await sendData(`${apiKey}/`, data, token);
    return response
  },
  removeService: async (id) => {
    const response = await deleteData(`${apiKey}/id=${id}`, token);
    return response
  },
  getServices: async () => {
    const response = await getData(`${apiKey}`, token);
    return response
  }
}

// All generators*
function* addService({ payload: { service } }) {
  try {
    console.log('saga action', service);
    const response = yield call(accountDBCalls.addService, service);
    yield put(addServiceSuccess(response))
  } catch (err) {
    console.log('error found', err);
  }
}

function* removeService({ payload: { data } }) {
  try {
    yield call(accountDBCalls.removeService, data)
    yield put(removeServiceSuccess(data.id))
  } catch (err) {
    console.log('error found', err);
  }
}

function* getServices(){
  try {
    const services = yield call(accountDBCalls.getServices, data)
    yield put(initializeServices(services))
  } catch (err) {
    console.log('error found', err);
  }
}

function* addServiceRequest() {
  yield takeLatest(ADD_SERVICE_REQUEST, addService)
}

function* removeServiceRequest() {
  yield takeLatest(REMOVE_SERVICE_REQUEST, removeService)
}

function* getServicesRequest() {
  yield takeLatest(GET_SERVICES, getServices)
}

export default function* serviceSagas() {
  yield spawn(addServiceRequest)
  yield spawn(removeServiceRequest)
  yield spawn(getServicesRequest)
}