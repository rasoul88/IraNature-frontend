import toursActionTypes from "./tours.actionTypes";

export const toggleFilterPanel = () => ({
  type: toursActionTypes.TOGGLE_FILTER_PANEL,
});

export const setFilterItem = (itemName, value) => ({
  type: toursActionTypes.SET_FILTER_ITEM,
  payload: { itemName, value },
});
