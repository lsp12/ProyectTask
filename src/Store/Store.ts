import { configureStore } from '@reduxjs/toolkit'
import State from './ActionState/State.slice'

export const Store= configureStore({
  reducer: {
    State
  }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch