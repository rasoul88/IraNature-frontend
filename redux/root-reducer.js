import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import toursReducer from "./tours/tours.reducer";

export default combineReducers({
  user: userReducer,
  tours: toursReducer,
});
