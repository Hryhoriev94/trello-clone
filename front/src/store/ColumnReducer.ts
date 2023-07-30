import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ColumnState} from "../interfaces/ColumnState";
import {ColumnType} from "../types/column";

const initialState:ColumnState = {
    columns: {}
}
export const columnSlice = createSlice({
    name: 'columns', initialState,
    reducers: {
        addColumn: (state, action: PayloadAction<ColumnType>) => {
            state.columns[action.payload.id] = action.payload;
        },
        removeColumn: (state, action: PayloadAction<string>) => {
            delete state.columns[action.payload];
        }
    }
})

export const {addColumn, removeColumn} = columnSlice.actions

export default columnSlice.reducer