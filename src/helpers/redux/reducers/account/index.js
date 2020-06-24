import { auth } from '../../types';
const { SIGN_IN_SUCCESS } = auth;
const initialState = {
 
}
const accountReducer = (prevState = initialState, { type, payload }) => {
  switch(type) {
    case SIGN_IN_SUCCESS:
      prevState = payload.data;
      return prevState
    default:
      return prevState;
  }
}

export default accountReducer;
