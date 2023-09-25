import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import commentsReducer from "./comments";
import itemsReducer from "./items";

const rootReducer = combineReducers({
  users: usersReducer,
  comments: commentsReducer,
  items: itemsReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
