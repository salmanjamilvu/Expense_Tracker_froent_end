import { configureStore } from '@reduxjs/toolkit'
import expenseSlice from './reducer'
import {apiSlice} from './apiSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    expense: expenseSlice,
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(apiSlice.middleware),
})