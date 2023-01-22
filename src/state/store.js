import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice/modalSlice";
import dataReducer from "./slices/dataSlice/dataSlice"
import formModalReducer from "./slices/formModalSlice/formModalSlice";
export const store = configureStore({
    reducer: { modal: modalReducer, data: dataReducer, formModal: formModalReducer }
}
)


