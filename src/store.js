import { configureStore } from '@reduxjs/toolkit'
import { billReducer } from './features/billslice'

export const store = configureStore({
  reducer: {
    bill: billReducer,
  },
})