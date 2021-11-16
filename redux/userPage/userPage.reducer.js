import userPageActionTypes from "./userPage.actionTypes";
const INITIAL_STATE = {
  selectedTab: null,
  myCreatedTours: [],
};

const userPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userPageActionTypes.CHANGE_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload,
      };
    case userPageActionTypes.SET_MY_CREATED_TOURS:
      return {
        ...state,
        myCreatedTours: action.payload,
      };
    default:
      return state;
  }
};
export default userPageReducer;
