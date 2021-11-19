import { all, call, takeLatest, put } from "redux-saga/effects";
import { get, post, patch } from "axios";
import toursActionTypes from "./tours.actionTypes";
import {
  createTourSuccess,
  createTourFailure,
  setActiveTourGuides,
  resetCreateTourData,
} from "./tours.actions";
import {
  showLoadingToast,
  showToast,
  objectDateToString,
} from "../../utils/functions";
import { changeSelectedTab } from "../../redux/userPage/userPage.actions";

export function* getActiveTourGuides() {
  try {
    const activeTourGuides = yield get("users/tourGuides");
    yield put(setActiveTourGuides(activeTourGuides.data.users));
  } catch (error) {
    console.log(error);
  }
}

export function* createTour({ payload }) {
  try {
    showLoadingToast("در حال ایجاد تور ...");
    const bodyData = {};
    for (const item in payload) {
      if (item === "imageCover" || item === "images") continue;
      if (item === "startDate") {
        bodyData[item] = objectDateToString(payload[item]);
      } else {
        bodyData[item] = payload[item];
      }
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
    const newResponse = yield patch(`tours/${tour._id}`, formData);
    console.log("newResponse", newResponse);
    yield put(createTourSuccess());
    showToast("success", "تور شما با موفقیت ایجاد شد");
    yield put(resetCreateTourData());
    yield put(changeSelectedTab("tours"));
  } catch (error) {
    yield put(createTourFailure(error.message));
    showToast("error", error.message);
  }
}

export function* submitReview({ payload }) {
  try {
    showLoadingToast("در حال ثبت دیدگاه ...");
    const review = yield post("reviews", payload);
    console.log(review);
    showToast("success", "دیدگاه شما با موفقیت ثبت شد");
  } catch (error) {
    showToast("error", error.message);
  }
}

export function* onCreateTour() {
  yield takeLatest(toursActionTypes.CREATE_TOUR_START, createTour);
}

export function* onGetActiveTourGuides() {
  yield takeLatest(
    toursActionTypes.GET_ACTIVE_TOUR_GUIDES,
    getActiveTourGuides
  );
}

export function* onSubmitReview() {
  yield takeLatest(toursActionTypes.SUBMIT_REVIEW, submitReview);
}

export function* toursSagas() {
  yield all([
    call(onCreateTour),
    call(onGetActiveTourGuides),
    call(onSubmitReview),
  ]);
}
