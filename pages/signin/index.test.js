import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { findByTestAttribute } from "../../test/utils";
import { UnconnectedSignInSignUpPage } from ".";

const setup = () => {
  return shallow(<UnconnectedSignInSignUpPage />);
};

test("renders signin-signup component", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "component-signin-signup");
  expect(component.length).toBe(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});

describe("useReducer hook calls when click 'signup', 'signin', 'forgotPassword' and 'signinWithPassword' buttons", () => {
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
    let forgotPasswordForm;

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

      const signinFormWrapper = findByTestAttribute(
        wrapper,
        "signin-form"
      ).shallow();

      forgotPasswordButton = findByTestAttribute(
        signinFormWrapper,
        "forgotPassword-button"
      );

      forgotPasswordForm = findByTestAttribute(wrapper, "forgot-password-form");
    });

    test("renders `forgotPassword` button correctly", () => {
      expect(forgotPasswordButton.length).toBe(1);
    });

    test("does not render `forgotPasswordForm` ", () => {
      expect(forgotPasswordForm.length).toBe(0);
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
    let signinForm;
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

      signinForm = findByTestAttribute(wrapper, "signin-form");

      const forgotPasswordFormWrapper = findByTestAttribute(
        wrapper,
        "forgot-password-form"
      ).shallow();

      signinWithPasswordButton = findByTestAttribute(
        forgotPasswordFormWrapper,
        "singinWithPassword-button"
      );
    });

    test("does not renders `signinForm` button", () => {
      expect(signinForm.length).toBe(0);
    });

    test("renders `signinWithPassword` button", () => {
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
