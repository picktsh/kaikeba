import { createStore, combineReducers } from "redux";
import userReducer from "./userReducer";

const store = createStore(combineReducers({ user: userReducer }));

export default store;
