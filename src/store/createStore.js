import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
import commentsReducer from "./comments";
import itemsReducer from "./items";
import basketReducer from "./basket";

const rootReducer = combineReducers({
  users: usersReducer,
  comments: commentsReducer,
  items: itemsReducer,
  basket: basketReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
