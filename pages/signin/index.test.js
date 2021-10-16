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

describe("userReducer hook calls when click 'signup', 'signin', 'forgotPassword' and 'signinWithPassword' buttons", () => {
  let wrapper;
  const mockDispatch = jest.fn();
  beforeEach(() => {
    mockDispatch.mockClear();

    React.useReducer = jest.fn().mockReturnValue(["", mockDispatch]);

    wrapper = setup();
  });

  test("correct initial value ('sinin')", () => {
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  test("click on 'signup' Button", () => {
    const signupButton = findByTestAttribute(wrapper, "signup-button");
    signupButton.simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "setMode",
      payload: "signup",
    });
  });

  test("click on 'signin' Button", () => {
    const signinButton = findByTestAttribute(wrapper, "signin-button");
    signinButton.simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "setMode",
      payload: "signin",
    });
  });

  describe("when state.forgotPassword is 'false'", () => {
    let forgotPasswordButton;
    let signinWithPasswordButton;

    beforeEach(() => {
      mockDispatch.mockClear();

      React.useReducer = jest.fn().mockReturnValue([
        {
          mode: "signin",
          forgotPassword: false,
        },
        mockDispatch,
      ]);

      wrapper = setup();

      forgotPasswordButton = findByTestAttribute(
        wrapper,
        "forgotPassword-button"
      );

      signinWithPasswordButton = findByTestAttribute(
        wrapper,
        "signinWithPassword-button"
      );
    });

    test("renders `forgotPassword` button correctly", () => {
      expect(forgotPasswordButton.length).toBe(1);
    });

    test("does not render `signinWithPassword` button", () => {
      expect(signinWithPasswordButton.length).toBe(0);
    });

    test("click on 'forgotPassword' Button", () => {
      forgotPasswordButton.simulate("click");
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "forgotPassword",
        payload: true,
      });
    });
  });

  describe("when state.forgotPassword is 'true'", () => {
    let forgotPasswordButton;
    let signinWithPasswordButton;

    beforeEach(() => {
      mockDispatch.mockClear();

      React.useReducer = jest.fn().mockReturnValue([
        {
          mode: "signin",
          forgotPassword: true,
        },
        mockDispatch,
      ]);

      wrapper = setup();

      forgotPasswordButton = findByTestAttribute(
        wrapper,
        "forgotPassword-button"
      );

      signinWithPasswordButton = findByTestAttribute(
        wrapper,
        "singinWithPassword-button"
      );
    });

    test("renders `forgotPassword` button correctly", () => {
      expect(forgotPasswordButton.length).toBe(0);
    });

    test("does not render `signinWithPassword` button", () => {
      expect(signinWithPasswordButton.length).toBe(1);
    });

    test("click on 'forgotPassword' Button", () => {
      signinWithPasswordButton.simulate("click");
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "forgotPassword",
        payload: false,
      });
    });
  });
});
