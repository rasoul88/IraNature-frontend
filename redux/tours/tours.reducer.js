import toursActionTypes from "./tours.actionTypes";
const INITIAL_STATE = {
  panelStatus: false,
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
  dataLimits: {
    days: { min: 1, max: 20, step: 1 },
    price: { min: 200000, max: 4000000, step: 50000 },
    maxParticipants: { min: 5, max: 40, step: 1 },
  },
  activeCities: [
    { name: "تهران", id: 1 },
    { name: "اصفهان", id: 2 },
    { name: "تبریز", id: 3 },
    { name: "کرج", id: 4 },
    { name: "شیراز", id: 5 },
  ],
};

const toursReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case toursActionTypes.TOGGLE_FILTER_PANEL:
      return {
        ...state,
        panelStatus: !state.panelStatus,
      };
    case toursActionTypes.SET_FILTER_ITEM:
      return {
        ...state,
        filterItems: {
          ...state.filterItems,
          [action.payload.itemName]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default toursReducer;
