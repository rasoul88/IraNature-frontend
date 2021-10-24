import userActionTypes from "./user.actionTypes";
const INITIAL_STATE = {
  // currentUser: { name: "rasoul", email: "sahrayeDelha@gmail.com" },
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
