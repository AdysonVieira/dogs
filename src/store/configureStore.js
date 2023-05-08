import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import setLocalStorage from "./middlewares/setLocalStorage";
import photo from "./reducers/photoGet";
import photoPost from "./reducers/photoPost";
import token from "./reducers/token";
import user from "./reducers/user";
import feed from "./reducers/feed";
import modal from "./reducers/modal";

const middleware = [ ...getDefaultMiddleware(), setLocalStorage ]
const reducer = combineReducers({
  photo,
  token, 
  user,
  feed,
  modal,
  photoPost,
})
const store = configureStore({reducer, middleware})

export default store;