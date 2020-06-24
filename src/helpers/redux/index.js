import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootSaga from './sagas';
import allReducers from './reducers';
import * as types from './types';
import * as actions from './actions';
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  allReducers,
  applyMiddleware(sagaMiddleWare),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);
sagaMiddleWare.run(rootSaga)

export { types, store, persistor, actions };
