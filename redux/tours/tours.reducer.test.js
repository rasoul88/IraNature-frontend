import toursReducer from "./tours.reducer";
import { toggleFilterPanel, setFilterItem } from "./tours.actions";

describe("tourReducer", () => {
  test("return default initial state when no action is passed", () => {
    const state = toursReducer(undefined, {});
    expect(state.panelStatus).toBe(false);
    expect(state.filterItems.name).toBe("");
  });

  test("returns 'true' when toggleFilterPanel is passed", () => {
    const state = toursReducer(undefined, toggleFilterPanel());
    expect(state.panelStatus).toBe(true);
  });

  test("retruns new filter item value when setFilterItem action is passed", () => {
    const itemName = "name";
    const value = "see explorer";
    const state = toursReducer(undefined, setFilterItem(itemName, value));
    expect(state.filterItems[itemName]).toBe(value);
  });
});
