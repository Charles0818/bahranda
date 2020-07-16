import { auth, account } from '../../types';
const { SIGN_IN_SUCCESS, SIGN_OUT } = auth;

const {
  GET_ACCOUNT_DASHBOARD_SUCCESS,
  UPDATE_PROFILE_SUCCESS, CHANGE_PASSWORD_FAILURE,
  GET_ACCOUNT_DASHBOARD_FAILURE, UPDATE_PROFILE_FAILURE,
  UPDATE_BANK_INFO_SUCCESS, UPDATE_BANK_INFO_FAILURE
} = account;

const initialState = {
 profile: {

 },

 bankInfo: {},
 errors: {
   get: '',
   updateProfile: '',
   changePassword: '',
   bankInfo: ''
 },
 success: {
   updateProfile: ''
 }
}
const accountReducer = (prevState = initialState, { type, payload }) => {
  switch(type) {
    case SIGN_IN_SUCCESS:
      prevState.profile = payload.user;
      return prevState
    case SIGN_OUT:
      return initialState
    case GET_ACCOUNT_DASHBOARD_SUCCESS:
      return { ...prevState, ...payload.dashboard }
    case UPDATE_PROFILE_SUCCESS:
      prevState.success.updateProfile = payload.message
      prevState.profile = payload.profile;
      return prevState;
    case CHANGE_PASSWORD_FAILURE:
      prevState.errors.changePassword = payload.error;
      return prevState
    case UPDATE_PROFILE_FAILURE:
      prevState.errors.updateProfile = payload.error;
      return prevState;
    case UPDATE_BANK_INFO_SUCCESS:
      prevState.bankInfo = payload.bankInfo;
      return prevState;
    case UPDATE_BANK_INFO_FAILURE:
      prevState.errors.bankInfo = payload.error;
    default:
      return prevState;
  }
}

export default accountReducer;
