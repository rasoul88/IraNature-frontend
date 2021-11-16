import { all, call, takeLatest, put } from "redux-saga/effects";
import { get } from "axios";
import userPageActionTypes from "./userPage.actionTypes";
import { setMyCreatedTours } from "./userPage.actions";
// import { showLoadingToast, showToast } from "../../utils/functions";

export function* getMyCreatedTours() {
  try {
    const myCreatedTours = yield get("tours/getMyCreatedTours");
    yield put(setMyCreatedTours(myCreatedTours.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function* onGetActiveTourGuides() {
  yield takeLatest(userPageActionTypes.GET_MY_CREATED_TOURS, getMyCreatedTours);
}

export function* userPageSagas() {
  yield all([call(onGetActiveTourGuides)]);
}
