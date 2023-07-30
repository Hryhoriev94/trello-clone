import { configureStore } from '@reduxjs/toolkit';
import CardReducer from "./CardReducer";
import columnReducer from "./ColumnReducer";

const store = configureStore({
    reducer: {
        cards: CardReducer,
        columns: columnReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;