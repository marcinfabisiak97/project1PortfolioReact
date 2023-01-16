import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: false
}
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open: (state) => {
            state.count = true;
        },
        close: (state) => {
            state.count = false;
        }
    }
})
export const { open, close } = modalSlice.actions;
export default modalSlice.reducer