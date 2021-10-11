import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { findByTestAttribute } from "../../test/utils";
import SignInSignUpPage from ".";

const setup = () => {
  return shallow(<SignInSignUpPage />);
};

test("renders signin-signup component", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "component-signin-signup");
  expect(component.length).toBe(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});

describe("setState hook calls when click 'signup' and 'signin' button", () => {
  let wrapper;
  const mockSetMode = jest.fn();
  beforeEach(() => {
    mockSetMode.mockClear();

    React.useState = jest.fn().mockReturnValue(["", mockSetMode]);

    wrapper = setup();
  });

  test("correct initial value ('sinin')", () => {
    expect(mockSetMode).not.toHaveBeenCalled();
  });

  test("click on signup Button", () => {
    const signupButton = findByTestAttribute(wrapper, "signup-button");
    signupButton.simulate("click");
    expect(mockSetMode).toHaveBeenCalledWith("signup");
  });

  test("click on signin Button", () => {
    const signinButton = findByTestAttribute(wrapper, "signin-button");
    signinButton.simulate("click");
    expect(mockSetMode).toHaveBeenCalledWith("signin");
  });
});
