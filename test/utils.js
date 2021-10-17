import { createStore } from "redux";
import rootReducer from "../redux/root-reducer";

export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};
