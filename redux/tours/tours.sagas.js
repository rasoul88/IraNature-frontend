import { all, call, takeLatest, put } from "redux-saga/effects";
import { post, patch } from "axios";
import toursActionTypes from "./tours.actionTypes";
import { createTourSuccess, createTourFailure } from "./tours.actions";

export function* createTour({ payload }) {
  try {
    const bodyData = {};
    for (const item in payload) {
      if (item === "imageCover" || item === "images") continue;
      bodyData[item] = payload[item];
    }
    const response = yield post("tours", bodyData);
    const tour = response.data.doc;

    const formData = yield new FormData();
    for (const item in payload) {
      if (item === "imageCover") {
        formData.append(item, payload[item][0]);
      } else if (item === "images") {
        Object.values(payload[item]).forEach((file) => {
          formData.append("images", file);
        });
      }
    }
    console.log("formData", ...formData.entries());
    const newResponse = yield patch(`tours/${tour._id}`, formData);
    console.log("newResponse", newResponse);
    yield put(createTourSuccess());
  } catch (error) {
    console.log(error);
    yield put(createTourFailure(error));
  }
}

export function* onCreateTour() {
  yield takeLatest(toursActionTypes.CREATE_TOUR_START, createTour);
}

export function* toursSagas() {
  yield all([call(onCreateTour)]);
}
