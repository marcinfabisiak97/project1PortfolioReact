import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice/modalSlice";
export const store = configureStore({
    reducer: { modal: modalReducer, }
})


