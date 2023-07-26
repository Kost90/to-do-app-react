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
           state.tasks = state.tasks.filter((task) => {
                task.id !== action.payload})
        },
    }
})

export const {addtask, removetask} = TasksSlice.actions

export default TasksSlice.reducer