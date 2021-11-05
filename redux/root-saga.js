import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { toursSagas } from "./tours/tours.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(toursSagas)]);
}
