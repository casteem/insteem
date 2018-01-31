/*
 This file controls the shape of the default state.

 It imports all the various reducers and combines them using the
 `combineReducers()` API from redux.
 */

import { combineReducers } from "redux";

import auth from "./auth/reducer";
// import post from "./posts/reducer";
// import tags from "./tags/reducer";
// import rehydrated from "./rehydrated/reducer";

const reducer = combineReducers({
  auth
  // post,
  // tags,
  // rehydrated
});

export default reducer;
