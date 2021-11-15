import userActionTypes from "./user.actionTypes";
const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isFetching: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.UPDATE_ME:
    case userActionTypes.UPDATE_MY_PASSWORD:
    case userActionTypes.EMAIL_SIGN_IN_START:
    case userActionTypes.SIGN_UP_START:
    case userActionTypes.RESET_PASSWORD:
    case userActionTypes.FORGOT_PASSWORD:
      return {
        ...state,
        isFetching: true,
      };
    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_UP_SUCCESS:
    case userActionTypes.UPDATE_ME_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        isFetching: false,
      };
    case userActionTypes.TOKEN_SENT:
    case userActionTypes.UPDATE_MY_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
    case userActionTypes.RESET_PASSWORD_FAILURE:
    case userActionTypes.UPDATE_ME_FAILURE:
    case userActionTypes.UPDATE_MY_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case userActionTypes.REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };
    case userActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export default userReducer;
