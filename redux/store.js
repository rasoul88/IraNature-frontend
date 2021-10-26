import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import persistReducer from "./root-reducer";

import rootSaga from "./root-saga";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

export const store = createStore(
  persistReducer,
  applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
