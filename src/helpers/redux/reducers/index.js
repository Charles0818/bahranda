import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import UIReducer from './UI';
import accountReducer from './account';
import authReducer from './auth';
import commodityReducer from './commodity';
import walletReducer from './wallet';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'email']
}
const allReducers = combineReducers({
  authReducer: persistReducer(authPersistConfig, authReducer),
  accountReducer,
  commodityReducer,
  UIReducer,
  walletReducer
})

export default allReducers