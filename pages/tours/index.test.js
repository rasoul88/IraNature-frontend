import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { findByTestAttribute } from "../../test/utils";
import ToursPage from "./index";

const setup = (props = {}) => {
  return shallow(<ToursPage {...props} />);
};

test("renders ToursPage correctly", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "component-tours-page");
  expect(component.length).toBe(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
