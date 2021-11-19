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

  activeTourGuides: [],

  tourUnderConstruction: {
    data: {
      name: "",
      duration: 0,
      price: 0,
      startLocation: null,
      destination: null,
      startDate: null,
      maxGroupSize: 0,
      difficulty: "",
      guides: null,
      imageCover: null,
      gradientColor: { from: null, to: null },
      images: null,
      summary: null,
    },
    errors: {},
  },

  isFetching: false,
};

const toursReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case toursActionTypes.CREATE_TOUR_START:
      return {
        ...state,
        isFetching: true,
      };
    case toursActionTypes.CREATE_TOUR_SUCCESS:
    case toursActionTypes.CREATE_TOUR_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case toursActionTypes.RESET_CREATE_TOUR_DATA:
      return {
        ...state,
        tourUnderConstruction: INITIAL_STATE.tourUnderConstruction,
      };
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
    case toursActionTypes.SET_TOUR_DATA_ITEM:
      return {
        ...state,
        tourUnderConstruction: {
          ...state.tourUnderConstruction,
          data: {
            ...state.tourUnderConstruction.data,
            [action.payload.itemName]: action.payload.value,
          },
        },
      };
    case toursActionTypes.SET_TOUR_DATA_ERRORS:
      return {
        ...state,
        tourUnderConstruction: {
          ...state.tourUnderConstruction,
          errors: action.payload,
        },
      };
    case toursActionTypes.SET_ACTIVE_TOUR_GUIDES:
      return {
        ...state,
        activeTourGuides: action.payload,
      };
    default:
      return state;
  }
};

export default toursReducer;
