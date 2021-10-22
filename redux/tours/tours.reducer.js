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

  toursData: [
    {
      id: 0,
      title: "کاوشگری دریا",
      items: [
        "تور 3 روزه",
        "تا 50 نفر",
        "راهنمای تور : 2 نفر",
        "خواب در هتل دنج",
        "دشواری : ‌راحت",
      ],
      backgroundImage: "/assets/img/nat-5.jpg",
      gradientColor: "linear-gradient(to right bottom, #ffb900, #ff7730)",
      gradientText:
        "linear-gradient(to right bottom, rgba(255, 185, 0, 0.85), rgba(255, 119, 48, 0.85))",
      payValue: "3,000,000",
    },
    {
      id: 1,
      title: "راهپیمایی جنگل",
      items: [
        "تور 7 روزه",
        "تا 40 نفر",
        "راهنمای تور : 6 نفر",
        "خواب در چادرهای فراهم شده",
        "دشواری : متوسط",
      ],
      backgroundImage: "/assets/img/nat-6.jpg",
      gradientColor: "linear-gradient(to right bottom, #7ed56f,  #28b485)",
      gradientText:
        "linear-gradient(to right bottom, rgba(126, 213, 111, 0.85),  rgba(40, 180, 133, 0.85))",
      payValue: "5,000,000",
    },
    {
      id: 2,
      title: "ماجراجویی برفی",
      items: [
        "تور 5 روزه",
        "تا 15 نفر",
        "راهنمای تور : 3 نفر",
        "خواب در چادر های فراهم شده",
        "دشواری : سخت",
      ],
      backgroundImage: "/assets/img/nat-7.jpg",
      gradientColor:
        "linear-gradient(to right bottom,  rgba(41, 152, 255),   rgba(86, 67, 250))",
      gradientText:
        "linear-gradient(to right bottom,  rgba(41, 152, 255, 0.85),   rgba(86, 67, 250, 0.85))",
      payValue: "2,000,000",
    },
    {
      id: 3,
      title: "کاوشگری دریا",
      items: [
        "تور 3 روزه",
        "تا 50 نفر",
        "راهنمای تور : 2 نفر",
        "خواب در هتل دنج",
        "دشواری : ‌راحت",
      ],
      backgroundImage: "/assets/img/nat-5.jpg",
      gradientColor: "linear-gradient(to right bottom, #ffb900, #ff7730)",
      gradientText:
        "linear-gradient(to right bottom, rgba(255, 185, 0, 0.85), rgba(255, 119, 48, 0.85))",
      payValue: "3,000,000",
    },
    {
      id: 4,
      title: "راهپیمایی جنگل",
      items: [
        "تور 7 روزه",
        "تا 40 نفر",
        "راهنمای تور : 6 نفر",
        "خواب در چادرهای فراهم شده",
        "دشواری : متوسط",
      ],
      backgroundImage: "/assets/img/nat-6.jpg",
      gradientColor: "linear-gradient(to right bottom, #7ed56f,  #28b485)",
      gradientText:
        "linear-gradient(to right bottom, rgba(126, 213, 111, 0.85),  rgba(40, 180, 133, 0.85))",
      payValue: "5,000,000",
    },
    {
      id: 5,
      title: "ماجراجویی برفی",
      items: [
        "تور 5 روزه",
        "تا 15 نفر",
        "راهنمای تور : 3 نفر",
        "خواب در چادر های فراهم شده",
        "دشواری : سخت",
      ],
      backgroundImage: "/assets/img/nat-7.jpg",
      gradientColor:
        "linear-gradient(to right bottom,  rgba(41, 152, 255),   rgba(86, 67, 250))",
      gradientText:
        "linear-gradient(to right bottom,  rgba(41, 152, 255, 0.85),   rgba(86, 67, 250, 0.85))",
      payValue: "2,000,000",
    },
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
