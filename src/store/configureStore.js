import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photo from "./reducers/photoReducer";

const reducer = combineReducers({photo})
const store = configureStore({reducer})

export default store;