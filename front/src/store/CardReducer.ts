import {CardType} from "../types/card";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CardsState} from "../interfaces/Card/CardState";




const initialState: CardsState = {
    cards: {}
}

export const cardSlice = createSlice({
    name: 'cards', initialState,
    reducers: {
        addCard: (state, action: PayloadAction<CardType>) => {
            state.cards[action.payload.id] = action.payload;
        },
        removeCard: (state, action:PayloadAction<string>) => {
            delete state.cards[action.payload];
        },
        updateCardName: (state, action:PayloadAction<{id: string, name: string}>) => {
            const {id, name } = action.payload;
            if(state.cards[id]) {
                state.cards[id].name = name;
            }
        }
    }
})

export const {addCard, removeCard, updateCardName} = cardSlice.actions;

export default cardSlice.reducer