import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    author: "Marcin Fabisiak",
    email: "marcibfabisiak123@gmail.com",
    phone: "48 604 132 689",
    gitHub: "https://github.com/marcinfabisiak97"
}
export const dataSlice = createSlice({
    name: 'data',
    initialState,
})

export default dataSlice.reducer