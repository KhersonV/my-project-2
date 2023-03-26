import { createSlice } from "@reduxjs/toolkit";



export const initialState = {};

export const likeSlice = createSlice({
    name: "Like",
    initialState,
    reducers: {
        addLike: (state, action) => ({ ...state, [action.payload]: true }),
        removeLike: (state, action) => ({ ...state, [action.payload]: false }),
    },
});

export const { addLike, removeLike } = likeSlice.actions;
export default likeSlice.reducer;
