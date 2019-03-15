import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import ReduxPromise from 'redux-promise';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export const store = createStoreWithMiddleware(persistedReducer);
export const persistor = persistStore(store);