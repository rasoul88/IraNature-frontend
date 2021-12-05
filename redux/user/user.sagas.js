import { all, call, takeLatest, put } from "redux-saga/effects";
import { post, patch } from "axios";
import userActionTypes from "./user.actionTypes";
import {
  signInFailure,
  signInSuccess,
  signUpFailure,
  signUpSuccess,
  resetPasswordFailure,
  tokenSent,
  updateMeSuccess,
  updateMeFailure,
  updateMyPasswordSuccess,
  updateMyPasswordFailure,
} from "./user.actions";
import { showLoadingToast, showToast } from "../../utils/functions";

export function* signInWithEmail({ payload }) {
  try {
    showLoadingToast("در حال ورود ...");
    const user = yield post("users/login", payload);
    yield put(signInSuccess(user.data.user));
    showToast("success", "ورود با موفقیت انجام شد");
  } catch (error) {
    yield put(signInFailure(error.message));
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

export function* signUp({ payload }) {
  try {
    showLoadingToast("در حال ثبت نام ...");
    const user = yield post("users/signup", payload);
    yield put(signUpSuccess(user.data.user));
    showToast("success", "ثبت نام با موفقیت انجام شد");
  } catch (error) {
    yield put(signUpFailure(error.message));
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

export function* forgotPassword({ payload }) {
  try {
    showLoadingToast("در حال ارسال ایمیل ...");
    const response = yield post(`users/forgotPassword`, {
      email: payload,
    });
    console.log(response);
    yield put(tokenSent(response.message));
    showToast("success", "ایمیل با موفقیت ارسال شد");
  } catch (error) {
    yield put(resetPasswordFailure(error.message));
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

export function* resetPassword({
  payload: { token, password, confirmPassword },
}) {
  try {
    showLoadingToast("در حال انجام عملیات ...");
    const user = yield patch(`users/resetPassword/${token}/`, {
      password,
      confirmPassword,
    });
    yield put(signInSuccess(user.data.user));
    showToast("success", "کلمه عبور به روزرسانی شد");
  } catch (error) {
    yield put(resetPasswordFailure(error.message));
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

export function* updateMe({ payload }) {
  try {
    showLoadingToast("در حال اعمال تغییرات ...");
    const user = yield patch(`users/updateMe`, payload);
    yield put(updateMeSuccess(user.data.user));
    showToast("success", "اطلاعات به روزرسانی شد");
  } catch (error) {
    yield put(updateMeFailure(error.message));
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

export function* updateMyPassword({ payload }) {
  try {
    showLoadingToast("در حال انجام عملیات ...");
    yield patch(`users/updateMyPassword/`, payload);
    yield put(updateMyPasswordSuccess());
    showToast("success", "کلمه عبور به روزرسانی شد");
  } catch (error) {
    yield put(updateMyPasswordFailure(error.message));
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

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* onForgotPassword() {
  yield takeLatest(userActionTypes.FORGOT_PASSWORD, forgotPassword);
}

export function* onResetPassword() {
  yield takeLatest(userActionTypes.RESET_PASSWORD, resetPassword);
}

export function* onUpdateMe() {
  yield takeLatest(userActionTypes.UPDATE_ME, updateMe);
}

export function* onUpdateMyPassword() {
  yield takeLatest(userActionTypes.UPDATE_MY_PASSWORD, updateMyPassword);
}

export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onForgotPassword),
    call(onResetPassword),
    call(onUpdateMe),
    call(onUpdateMyPassword),
  ]);
}
