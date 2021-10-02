import {combineReducers} from "redux";
import {branchesReducer} from "./branchesReducer";

export const rootReducer = combineReducers({
   branches: branchesReducer,
})