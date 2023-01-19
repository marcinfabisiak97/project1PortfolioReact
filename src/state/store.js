import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice/modalSlice";
import dataReducer from "./slices/dataSlice/dataSlice"
export const store = configureStore({
    reducer: { modal: modalReducer, data: dataReducer, }
}
)


