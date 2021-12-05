import { all, call, takeLatest, put, delay, select } from "redux-saga/effects";
import axios, { get, post, patch } from "axios";
import toursActionTypes from "./tours.actionTypes";
import {
  createTourSuccess,
  createTourFailure,
  setActiveTourGuides,
  resetCreateTourData,
  updateCurrentTourPageStart,
  updateCurrentTourPageSuccess,
  setUpdatedToursData,
} from "./tours.actions";
import {
  showLoadingToast,
  showToast,
  objectDateToString,
} from "../../utils/functions";
import { changeSelectedTab } from "../../redux/userPage/userPage.actions";
import { createQuery } from "../utils";

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
    if (error.message === "Network Error") {
      showToast(
        "error",
        "اتصال شما به اینترنت در حال حاضر قطع می باشد، برای انجام این عملیات باید به اینترنت متصل متصل باشید"
      );
    } else {
      showToast("error", error.message);
    }
  }
}

export function* submitReview({ payload }) {
  try {
    showLoadingToast("در حال ثبت دیدگاه ...");
    const review = yield post("reviews", payload);
    console.log(review);
    showToast("success", "دیدگاه شما با موفقیت ثبت شد");
    yield delay(500);
    yield put(updateCurrentTourPageStart(review.data.doc.tour));
  } catch (error) {
    if (error.message === "Network Error") {
      showToast(
        "warning",
        "اتصال شما به اینترنت در حال حاضر قطع می باشد. دیدگاه شما ذخیره شده است و بلافاصله بعد از اتصال شما به اینترنت به سرور ارسال خواهد شد"
      );
    } else {
      showToast("error", error.message);
    }
  }
}

export function* deleteReview({ payload }) {
  try {
    showLoadingToast("در حال حذف دیدگاه ...");
    yield axios.delete(`reviews/${payload.reviewId}`);
    showToast("success", "دیدگاه شما با موفقیت حذف شد");
    yield put(updateCurrentTourPageStart(payload.tourId));
  } catch (error) {
    if (error.message === "Network Error") {
      showToast(
        "warning",
        "اتصال شما به اینترنت در حال حاضر قطع می باشد. دیدگاه شما بلافاصله بعد از اتصال به اینترنت حذف خواهد شد"
      );
    } else {
      showToast("error", error.message);
    }
  }
}

export function* updateCurrentTourPage({ payload }) {
  try {
    const tour = yield get(`tours/${payload}`);
    console.log(tour.doc);
    yield put(updateCurrentTourPageSuccess(tour.data.doc));
  } catch (error) {
    if (error.message === "Network Error") {
      showToast(
        "error",
        "اتصال شما به اینترنت در حال حاضر قطع می باشد، برای انجام این عملیات باید به اینترنت متصل متصل باشید"
      );
    } else {
      showToast("error", error.message);
    }
  }
}

export const getToursState = (state) => state.tours;

export function* getFilteredTours() {
  try {
    const toursState = yield select(getToursState);
    const query = createQuery(toursState.filterItems, toursState.dataLimits);
    const tours = yield get(`tours?${query}`);
    console.log("tours:", tours);
    yield put(setUpdatedToursData(tours));
  } catch (error) {
    if (error.message === "Network Error") {
      showToast(
        "error",
        "اتصال شما به اینترنت در حال حاضر قطع می باشد، برای انجام این عملیات باید به اینترنت متصل متصل باشید"
      );
    } else {
      showToast("error", error.message);
    }
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

export function* onDeleteReview() {
  yield takeLatest(toursActionTypes.DELETE_REVIEW, deleteReview);
}

export function* onUpdateCurrentTourPage() {
  yield takeLatest(
    toursActionTypes.UPDATE_CURRENT_TOUR_PAGE_START,
    updateCurrentTourPage
  );
}

export function* onGetFilteredTours() {
  yield takeLatest(toursActionTypes.GET_FILTERED_TOURS, getFilteredTours);
}
export function* toursSagas() {
  yield all([
    call(onCreateTour),
    call(onGetActiveTourGuides),
    call(onSubmitReview),
    call(onDeleteReview),
    call(onUpdateCurrentTourPage),
    call(onGetFilteredTours),
  ]);
}
