import { auth } from '../../types';
const { SIGN_UP_SUCCESS ,SIGN_IN_ERROR, SIGN_UP_ERROR, PIN_ERROR, ISLOADING } = auth;
const initialState = {
  token: '',
  isLoading: false,
  email: '',
  errors: {
    signIn: '',
    signUp: '',
    pin: ''
  }
}
const authReducer = (prevState = initialState, { type, payload }) => {
  switch(type) {
    case ISLOADING:
      return { ...prevState, isLoading: payload.isLoading };
    case SIGN_UP_SUCCESS:
      return { ...prevState, isLoading: false, email: payload.email }
    case SIGN_IN_ERROR:
      prevState.errors.signIn = payload.error;
      return { ...prevState, isLoading: false }
    case SIGN_UP_ERROR:
      prevState.errors.signUp = payload.error;
      return { ...prevState, isLoading: false }
    case PIN_ERROR:
      prevState.errors.pin = payload.error;
      return { ...prevState, isLoading: false }
    default:
      return prevState;
  }
}

export default authReducer;
