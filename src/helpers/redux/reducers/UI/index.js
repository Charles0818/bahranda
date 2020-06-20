import { UI } from '../../types';
const { START_LOADING, STOP_LOADING } = UI;

const initialState = {
  isLoading: false,
}
export default UIReducer = (prevState = initialState, { type, payload }) => {
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
    default:
    return prevState
  }
}
