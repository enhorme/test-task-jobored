import { combineReducers, configureStore } from '@reduxjs/toolkit'

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import { api } from './api/api.js'
import authReducer from './slices/authSlice'
import favoriteReducer from './slices/favoriteSlice'
import filterReducer from './slices/filterSlice'

const favoritesPersistConfig = {
  key: 'favorite',
  version: 1,
  storage,
  blacklist: ['filter', 'auth', 'api']
}
const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage,
  blacklist: ['filter', 'favorite', 'api']
}

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  filter: filterReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  favorite: persistReducer(favoritesPersistConfig, favoriteReducer)
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(api.middleware),
  devTools: true
})

export const persistor = persistStore(store)
