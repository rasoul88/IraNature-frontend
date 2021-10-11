import { shallow } from "enzyme";
import App from "./index";

test("renders whole app", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
