import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from "./TasksReducer";
import columnReducer from "./ColumnReducer";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        columns: columnReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;