import { call, put, takeLatest, spawn } from 'redux-saga/effects';
import { dashboard } from '../../types';
import { dashboardActions } from '../../actions';
import { sendData, getData, deleteData, apiKey } from '../ajax';
const {
  GET_USER_DASHBOARD_REQUEST
} = dashboard;

const {
  getUserDashboardSuccess, getUserDashboardFailure,
} = dashboardActions;

const networkErrorMessage = 'No internet connection detected';
const dashboardDBCalls = {
  getDashboard: async (token) => {
    const response = await getData(`${apiKey}/user/home`, token);
    return response
  },
}

// All generators*
function* getDashboard({ payload: { token } }) {
  try {
    const dashboard = yield call(dashboardDBCalls.getDashboard, token);
    yield put(getUserDashboardSuccess(dashboard));
  } catch (err) {
    const { errors } = err;
    const errorMessage = errors
      ? errors[0].status === 404
      ? 'A user with the provided credentials does not exists'
      : errors[0].title
      : networkErrorMessage
    console.log('error found', err);
    yield put(getUserDashboardFailure(errorMessage))
  }
}

function* getUserDashboardRequest() {
  yield takeLatest(GET_USER_DASHBOARD_REQUEST, getDashboard)
}

export default function* dashboardSagas() {
  yield spawn(getUserDashboardRequest)
}