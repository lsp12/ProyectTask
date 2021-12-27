import { configureStore } from '@reduxjs/toolkit'
import State from './ActionState/State.slice'
import Task from './ActionTask/Task.slice'
export const Store= configureStore({
  reducer: {
    State,
    Task
  }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch