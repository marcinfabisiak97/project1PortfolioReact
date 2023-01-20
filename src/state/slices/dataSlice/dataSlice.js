import { createSlice } from "@reduxjs/toolkit";
import cv from "../../../assets/cv Marcin Fabisiak FE.pdf"
const initialState = {
    author: "Marcin Fabisiak",
    email: "marcinfabisiak123@gmail.com",
    phone: "48 604 132 689",
    gitHub: "https://github.com/marcinfabisiak97",
    cv: cv
}
export const dataSlice = createSlice({
    name: 'data',
    initialState,
})

export default dataSlice.reducer