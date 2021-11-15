import userActionTypes from "./user.actionTypes";

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const removeCurrentUser = () => ({
  type: userActionTypes.REMOVE_CURRENT_USER,
});

export const signUpStart = (userCredentials) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = (user) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = (error) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const forgotPassword = (email) => ({
  type: userActionTypes.FORGOT_PASSWORD,
  payload: email,
});

export const tokenSent = (message) => ({
  type: userActionTypes.TOKEN_SENT,
  payload: message,
});

export const resetPassword = (payload) => ({
  type: userActionTypes.RESET_PASSWORD,
  payload: payload,
});

export const resetPasswordFailure = (error) => ({
  type: userActionTypes.RESET_PASSWORD_FAILURE,
  payload: error,
});

export const clearError = () => ({
  type: userActionTypes.CLEAR_ERROR,
});

export const updateMe = (credentials) => ({
  type: userActionTypes.UPDATE_ME,
  payload: credentials,
});

export const updateMeSuccess = (user) => ({
  type: userActionTypes.UPDATE_ME_SUCCESS,
  payload: user,
});
export const updateMeFailure = (error) => ({
  type: userActionTypes.UPDATE_ME_FAILURE,
  payload: error,
});

export const updateMyPassword = (credentials) => ({
  type: userActionTypes.UPDATE_MY_PASSWORD,
  payload: credentials,
});

export const updateMyPasswordSuccess = () => ({
  type: userActionTypes.UPDATE_MY_PASSWORD_SUCCESS,
});

export const updateMyPasswordFailure = (error) => ({
  type: userActionTypes.UPDATE_MY_PASSWORD_FAILURE,
  payload: error,
});
