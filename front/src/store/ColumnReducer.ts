import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ColumnState} from "../interfaces/Column/ColumnState";
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
        },
        updateColumnName: (state, action:PayloadAction<{columnId: string, name: string}>) => {
            const {columnId, name} = action.payload;
            if(state.columns[columnId]) {
                state.columns[columnId].name = name;
            }
        }
    }
})

export const {addColumn, removeColumn, updateColumnName} = columnSlice.actions

export default columnSlice.reducer