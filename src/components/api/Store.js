import { configureStore } from '@reduxjs/toolkit'
import  TasksReducer  from 'components/Tasks/TasksSlicer'

export const Store = configureStore ({
  reducer: {
    todos: TasksReducer,
  }
}) 
