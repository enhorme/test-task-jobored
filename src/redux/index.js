import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import filterReducer from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    filter: filterReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})