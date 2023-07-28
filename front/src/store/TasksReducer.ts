import {TaskType} from "../types/task";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TasksState} from "../interfaces/TaskState";




const initialState: TasksState = {
    tasks: {}
}

export const taskSlice = createSlice({
    name: 'tasks', initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskType>) => {
            state.tasks[action.payload.id] = action.payload;
        },
        removeTask: (state, action:PayloadAction<string>) => {
            delete state.tasks[action.payload];
        }
    }
})

export const {addTask, removeTask} = taskSlice.actions;

export default taskSlice.reducer