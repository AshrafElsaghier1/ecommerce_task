import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    active: 0
};
const activeSlice = createSlice({
    name: "active",
    initialState,
    reducers: {

        setActive: (state, action) => {
            state.active = action.payload
        }

    },

})


export const activeReducer = activeSlice.reducer
export const { setActive } = activeSlice.actions
