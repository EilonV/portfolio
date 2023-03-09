import { configureStore } from '@reduxjs/toolkit'
import dndReducer from '../slices/dndSlice'

export const store = configureStore({
  reducer: {
    dnd: dndReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})