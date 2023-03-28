import { createSlice } from "@reduxjs/toolkit";



export const initialState = {};

export const cartSlice = createSlice({
    name: "productsInCart",
    initialState,
    reducers: {
        addToCart: (state, action) => ({ ...state, [action.payload]: true }),
        removeFromCart: (state, action) => ({ ...state, [action.payload]: false }),
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
