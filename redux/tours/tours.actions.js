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

export const resetCreateTourData = () => ({
  type: toursActionTypes.RESET_CREATE_TOUR_DATA,
});

export const getActiveTourGuides = () => ({
  type: toursActionTypes.GET_ACTIVE_TOUR_GUIDES,
});

export const setActiveTourGuides = (guides) => ({
  type: toursActionTypes.SET_ACTIVE_TOUR_GUIDES,
  payload: guides,
});

export const submitReview = (review) => ({
  type: toursActionTypes.SUBMIT_REVIEW,
  payload: review,
});

export const deleteReview = (reviewId) => ({
  type: toursActionTypes.DELETE_REVIEW,
  payload: reviewId,
});

export const updateCurrentTourPageStart = (tourId) => ({
  type: toursActionTypes.UPDATE_CURRENT_TOUR_PAGE_START,
  payload: tourId,
});

export const updateCurrentTourPageSuccess = (tour) => ({
  type: toursActionTypes.UPDATE_CURRENT_TOUR_PAGE_SUCCESS,
  payload: tour,
});

export const removeUpdatedCurrentTourPageData = () => ({
  type: toursActionTypes.REMOVE_UPDATED_CURRENT_TOUR_PAGE_DATA,
});

export const getFilteredTours = () => ({
  type: toursActionTypes.GET_FILTERED_TOURS,
});

export const setUpdatedToursData = (tours) => ({
  type: toursActionTypes.SET_UPDATED_TOURS_DATA,
  payload: tours,
});
