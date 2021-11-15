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

export const setTourDataItem = (itemName, value) => ({
  type: toursActionTypes.SET_TOUR_DATA_ITEM,
  payload: { itemName, value },
});

export const setTourDataErrors = (errors) => ({
  type: toursActionTypes.SET_TOUR_DATA_ERRORS,
  payload: errors,
});

export const getActiveTourGuides = () => ({
  type: toursActionTypes.GET_ACTIVE_TOUR_GUIDES,
});

export const setActiveTourGuides = (guides) => ({
  type: toursActionTypes.SET_ACTIVE_TOUR_GUIDES,
  payload: guides,
});
