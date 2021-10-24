import toursActionTypes from "./tours.actionTypes";
import { toggleFilterPanel, setFilterItem } from "./tours.actions";

describe("toggleFilterPanel", () => {
  test("returns an action with correct type", () => {
    const action = toggleFilterPanel();
    expect(action).toEqual({ type: toursActionTypes.TOGGLE_FILTER_PANEL });
  });
});

describe("setFilterItem", () => {
  test("returns an action with correct type and payload", () => {
    const itemName = "name";
    const value = "see explorer";
    const action = setFilterItem(itemName, value);
    expect(action).toEqual({
      type: toursActionTypes.SET_FILTER_ITEM,
      payload: { itemName, value },
    });
  });
});
