import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./likeReducer";
import cartReducer from "./cartReducer"

export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
        productsInCart: cartReducer,
    },
});