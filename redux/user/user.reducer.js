import userActionTypes from "./user.actionTypes";
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
    case userActionTypes.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
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
