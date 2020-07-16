import { UI } from '../../types';
const { START_LOADING, STOP_LOADING , SHOW_NETWORK_ERROR, ERASE_NETWORK_ERROR } = UI;

const initialState = {
  isLoading: false,
  networkError: {
    show: false,
    action: null
  }
}
const UIReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case START_LOADING:
      return {
        ...prevState,
        isLoading: true,
      };
    case STOP_LOADING: {
      return {
        ...prevState,
        isLoading: false,
      };
    }
    case SHOW_NETWORK_ERROR:
      const { action } = payload
      return {
        ...prevState,
        isLoading: false,
        networkError: {show: true, action}
      };
    case ERASE_NETWORK_ERROR:
      return {
        ...prevState,
        isLoading: false,
        networkError: { show:false, action: null }
      };
    default:
      return prevState
  }
}

export default UIReducer;
