import { configureStore  } from '@reduxjs/toolkit'
import postReducer from '../Redux_Tool/Reducer'

export const store = configureStore({
  reducer: {
    post : postReducer}
    ,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  
})