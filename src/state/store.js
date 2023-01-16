
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice/modalSlice";
export const store = configureStore({
    reducer: { modal: modalReducer, }
})


// export const store = createStore(
//     reducers,
//     {},
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )