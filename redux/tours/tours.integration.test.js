import { storeFactory } from "../../test/utils";
import { setFilterItem, toggleFilterPanel } from "./tours.actions";

describe("toggleFilterPanel action dispatcher", () => {
  test("if initial value be 'false", () => {
    const initialState = { tours: { panelStatus: false } };
    const store = storeFactory(initialState);
    store.dispatch(toggleFilterPanel());

    const expectedTourState = { panelStatus: true };
    const newTourState = store.getState().tours;

    expect(newTourState).toEqual(expectedTourState);
  });

  test("if initial value be 'true", () => {
    const initialState = { tours: { panelStatus: true } };
    const store = storeFactory(initialState);
    store.dispatch(toggleFilterPanel());

    const expectedTourState = { panelStatus: false };
    const newTourState = store.getState().tours;

    expect(newTourState).toEqual(expectedTourState);
  });
});

describe("setFilterItem action dispatcher", () => {
  test("dispach action for change `name` property", () => {
    const initialState = {
      tours: {
        filterItems: {
          name: "",
          days: [1, 20],
          price: [200000, 4000000],
          cities: null,
          dateRange: {
            from: null,
            to: null,
          },
          maxParticipants: [40],
          difficulty: [],
          page: 1,
        },
      },
    };
    const store = storeFactory(initialState);

    store.dispatch(setFilterItem("name", "see explorer"));

    const expectedTourState = {
      filterItems: {
        name: "see explorer",
        days: [1, 20],
        price: [200000, 4000000],
        cities: null,
        dateRange: {
          from: null,
          to: null,
        },
        maxParticipants: [40],
        difficulty: [],
        page: 1,
      },
    };
    const newTourState = store.getState().tours;

    expect(newTourState).toEqual(expectedTourState);
  });

  test("dispach action for change `difficulty` property", () => {
    const initialState = {
      tours: {
        filterItems: {
          name: "",
          days: [1, 20],
          price: [200000, 4000000],
          cities: null,
          dateRange: {
            from: null,
            to: null,
          },
          maxParticipants: [40],
          difficulty: [],
          page: 1,
        },
      },
    };
    const store = storeFactory(initialState);

    store.dispatch(setFilterItem("difficulty", ["easy", "hard"]));

    const expectedTourState = {
      filterItems: {
        name: "",
        days: [1, 20],
        price: [200000, 4000000],
        cities: null,
        dateRange: {
          from: null,
          to: null,
        },
        maxParticipants: [40],
        difficulty: ["easy", "hard"],
        page: 1,
      },
    };
    const newTourState = store.getState().tours;

    expect(newTourState).toEqual(expectedTourState);
  });
});
