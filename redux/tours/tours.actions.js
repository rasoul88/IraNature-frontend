import toursActionTypes from "./tours.actionTypes";

export const toggleFilterPanel = () => ({
  type: toursActionTypes.TOGGLE_FILTER_PANEL,
});

export const setFilterItem = (itemName, value) => ({
  type: toursActionTypes.SET_FILTER_ITEM,
  payload: { itemName, value },
});

export const createTourStart = (payload) => ({
  type: toursActionTypes.CREATE_TOUR_START,
  payload,
});
export const createTourSuccess = () => ({
  type: toursActionTypes.CREATE_TOUR_SUCCESS,
});
export const createTourFailure = (error) => ({
  type: toursActionTypes.CREATE_TOUR_FAILURE,
  payload: error,
});
