import { createSlice } from "@reduxjs/toolkit";

export const TasksSlice = createSlice({
    name:'todos',
    initialState: {
        tasks:[],
    },
    reducers:{
        addtask:(state,action) =>{
            state.tasks.push(action.payload)
        },
        removetask:(state,action) =>{
           state.tasks = state.tasks.filter(task => 
                task.id !== action.payload)
        },
        edittask: (state,action) =>{
            const index = state.tasks.findIndex(task =>
                task.id === action.payload.id
            )
            const copyTask = [...state.tasks];
            copyTask[index] = action.payload;
            state.tasks = copyTask
        },
    }
})

export const {addtask, removetask, edittask} = TasksSlice.actions

export default TasksSlice.reducer