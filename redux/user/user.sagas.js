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
} from "./user.actions";

export function* signInWithEmail({ payload }) {
  try {
    const user = yield post("users/login", payload);
    yield put(signInSuccess(user.data.user));
  } catch (error) {
    yield put(signInFailure(error.message));
    console.log(error);
  }
}

export function* signUp({ payload }) {
  try {
    const user = yield post("users/signup", payload);
    yield put(signUpSuccess(user.data.user));
    console.log(user);
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* forgotPassword({ payload }) {
  try {
    const response = yield post(`users/forgotPassword`, {
      email: payload,
    });
    console.log(response);
    yield put(tokenSent(response.message));
  } catch (error) {
    yield put(resetPasswordFailure(error.message));
  }
}

export function* resetPassword({
  payload: { token, password, confirmPassword },
}) {
  try {
    const user = yield patch(`users/resetPassword/${token}/`, {
      password,
      confirmPassword,
    });
    yield put(signInSuccess(user.data.user));
  } catch (error) {
    yield put(resetPasswordFailure(error.message));
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

export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onForgotPassword),
    call(onResetPassword),
  ]);
}
