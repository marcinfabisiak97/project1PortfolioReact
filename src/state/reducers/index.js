import { combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
    modal: reducer
});
export default reducers;