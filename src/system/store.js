import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// base stores
import { reducer as app } from "./app";
import { reducer as load } from "../feature/load";

const reducers = combineReducers({
  app,
  load
});
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  const { createLogger } = require(`redux-logger`);
  const logger = createLogger({
    collapsed: true
  });

  middlewares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));

export function getStore() {
  return store;
}
