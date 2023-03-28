import { createSlice } from "@reduxjs/toolkit";
import { omit } from "lodash";



export const initialState = {};

export const cartSlice = createSlice({
    name: "productsInCart",
    initialState,
    reducers: {
        addToCart: (state, action) => ({ ...state, [action.payload]: true }),
        removeFromCart: (state, action) => omit(state, action.payload),
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
