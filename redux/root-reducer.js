import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./user/user.reducer";
import toursReducer from "./tours/tours.reducer";
import userPageReducer from "./userPage/userPage.reducer";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const userPersistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["currentUser"],
};

const userPagePersistConfig = {
  key: "userPage",
  storage: storage,
  whitelist: ["selectedTab"],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  tours: toursReducer,
  userPage: persistReducer(userPagePersistConfig, userPageReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
