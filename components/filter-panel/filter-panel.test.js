import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { findByTestAttribute, storeFactory } from "../../test/utils";
import FilterPanel, { UnconnectedFilterPanel } from "./filter-panel.component";

const setup = () => {
  const initialState = {
    tours: {
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
    },
  };
  const store = storeFactory(initialState);
  return shallow(<FilterPanel store={store} />)
    .dive()
    .dive();
};

test("renders filterPanel correctly", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "component-filter-panel");
  expect(component.length).toBe(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});

describe("test action calls on filter item changes", () => {
  let wrapper;
  const mockSetFilterItem = jest.fn();
  const mocktoggleFilterPanel = jest.fn();

  beforeEach(() => {
    mockSetFilterItem.mockClear();
    mocktoggleFilterPanel.mockClear();
    const props = {
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
      toggleFilterPanel: mocktoggleFilterPanel,
      setFilterItem: mockSetFilterItem,
    };

    wrapper = shallow(<UnconnectedFilterPanel {...props} />);
  });

  test("test toggleFilterPanel button", () => {
    const toggleFilterPanelButton = findByTestAttribute(
      wrapper,
      "toggle-filter-panel-button"
    );
    expect(toggleFilterPanelButton.length).toBe(1);

    toggleFilterPanelButton.simulate("click");
    expect(mocktoggleFilterPanel).toHaveBeenCalled();
  });

  test("test name input", () => {
    const inputComponent = findByTestAttribute(wrapper, "name-input");
    expect(inputComponent.length).toBe(1);
    inputComponent.simulate("blur", { target: { value: "see explorer" } });
    expect(mockSetFilterItem).toHaveBeenCalledWith("name", "see explorer");
  });

  test("test price range slider", () => {
    const priceRangeSliderComponent = findByTestAttribute(
      wrapper,
      "price-range-slider"
    );
    expect(priceRangeSliderComponent.length).toBe(1);

    const simulateRange = [1000000, 3000000];
    priceRangeSliderComponent.simulate("change", simulateRange);
    expect(mockSetFilterItem).toHaveBeenCalledWith("price", simulateRange);
  });

  test("test days range slider", () => {
    const daysRangeSliderComponent = findByTestAttribute(
      wrapper,
      "days-range-slider"
    );
    expect(daysRangeSliderComponent.length).toBe(1);
    const simulateRange = [3, 7];
    daysRangeSliderComponent.simulate("change", simulateRange);
    expect(mockSetFilterItem).toHaveBeenCalledWith("days", simulateRange);
  });

  test("test dateRange date picker", () => {
    const dateRangeDatePickerComponent = findByTestAttribute(
      wrapper,
      "dateRange-date-picker"
    );
    expect(dateRangeDatePickerComponent.length).toBe(1);

    const simulateDate = {
      from: { day: 1, month: 8, year: 1400 },
      to: { day: 12, month: 8, year: 1400 },
    };
    dateRangeDatePickerComponent.simulate("change", simulateDate);
    expect(mockSetFilterItem).toHaveBeenCalledWith("dateRange", simulateDate);
  });

  test("test cities input selector", () => {
    const citiesSelectorComponent = findByTestAttribute(
      wrapper,
      "cities-multiselector"
    );
    expect(citiesSelectorComponent.length).toBe(1);
    const simulateCities = ["اصفهان", "تهران"];
    citiesSelectorComponent.simulate("select", simulateCities);
    expect(mockSetFilterItem).toHaveBeenCalledWith("cities", simulateCities);
  });

  test("test difficulty checkbox", () => {
    const difficultyCheckboxComponent = findByTestAttribute(
      wrapper,
      "difficulty-checkbox"
    );
    expect(difficultyCheckboxComponent.length).toBe(1);

    const simulateDifficulty = ["متوسط", "آسان"];
    difficultyCheckboxComponent.simulate("change", simulateDifficulty);
    expect(mockSetFilterItem).toHaveBeenCalledWith(
      "difficulty",
      simulateDifficulty
    );
  });

  test("test maxParticipants range slider", () => {
    const maxParticipantsRangeSliderComponent = findByTestAttribute(
      wrapper,
      "maxParticipants-range-slider"
    );
    expect(maxParticipantsRangeSliderComponent.length).toBe(1);
    const simulateRange = [17];
    maxParticipantsRangeSliderComponent.simulate("change", simulateRange);
    expect(mockSetFilterItem).toHaveBeenCalledWith(
      "maxParticipants",
      simulateRange
    );
  });
});
