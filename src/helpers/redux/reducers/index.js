import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import UIReducer from './UI';
import accountReducer from './account';
import authReducer from './auth';

const authPersistConfig = {
  key: 'auth',
  storage,
}
const allReducers = combineReducers({
  authReducer: persistReducer(authPersistConfig, authReducer),
  accountReducer,
  UIReducer,
})

export default allReducers