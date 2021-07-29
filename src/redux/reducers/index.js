import { combineReducers } from "redux";
import oantuxiReducer from "./oantuxi"

const rootReducer = combineReducers({
    //combine child reducer
    oantuxiReducer,
});

export default rootReducer;
