import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import setLocalStorage from "./middlewares/setLocalStorage";
import photo from "./reducers/photoReducer";
import token from "./reducers/token";
import user from "./reducers/user";

const middleware = [ ...getDefaultMiddleware(), setLocalStorage ]
const reducer = combineReducers({
  photo,
  token, 
  user,
})
const store = configureStore({reducer, middleware})

export default store;