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
        }
    }
})

export const {addCard, removeCard} = cardSlice.actions;

export default cardSlice.reducer