import userPageActionTypes from "./userPage.actionTypes";

export const changeSelectedTab = (selectedTab) => ({
  type: userPageActionTypes.CHANGE_SELECTED_TAB,
  payload: selectedTab,
});

export const getMyCreatedTours = () => ({
  type: userPageActionTypes.GET_MY_CREATED_TOURS,
});

export const setMyCreatedTours = (tours) => ({
  type: userPageActionTypes.SET_MY_CREATED_TOURS,
  payload: tours,
});
