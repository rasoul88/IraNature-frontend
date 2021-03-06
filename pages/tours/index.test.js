import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { findByTestAttribute, storeFactory } from "../../test/utils";
import ToursPage, { UnconnectedToursPage } from "./index";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<ToursPage store={store} />).dive();
};

test("renders ToursPage correctly", () => {
  const wrapper = setup({
    tours: { toursData: [], filterItems: { page: 1 } },
  }).dive();
  const component = findByTestAttribute(wrapper, "component-tours-page");
  expect(component.length).toBe(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});

const toursData = [
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
];

describe("renders tours", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      tours: {
        toursData,
        filterItems: { page: 1 },
      },
    }).dive();
  });

  test("renders correct amount of tours", () => {
    const tourCards = findByTestAttribute(wrapper, "tour-card");
    expect(tourCards.length).toBe(toursData.length);
  });
});

test("test action call on paginate change", () => {
  const mockSetFilterItem = jest.fn();
  const props = {
    panelStatus: false,
    page: 1,
    setFilterItem: mockSetFilterItem,
    toursData,
  };
  const wrapper = shallow(<UnconnectedToursPage {...props} />);
  const paginateComponent = findByTestAttribute(wrapper, "tours-pagination");
  expect(paginateComponent.length).toBe(1);

  const simulatePageClicked = 8;
  paginateComponent.simulate("change", simulatePageClicked);
  expect(mockSetFilterItem).toHaveBeenCalledWith("page", simulatePageClicked);
});
