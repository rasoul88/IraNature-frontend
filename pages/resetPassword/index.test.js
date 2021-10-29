import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import * as nextRouter from "next/router";

import { findByTestAttribute } from "../../test/utils";
import { UnconnectedResetPassword } from ".";

const setup = (props) => {
  return shallow(<UnconnectedResetPassword {...props} />);
};

describe("renders resetPassword page", () => {
  test("renders if there is no currentUser", () => {
    const mockUseRouter = jest.fn();
    nextRouter.useRouter = mockUseRouter;
    const wrapper = setup({ currentUser: null });
    const component = findByTestAttribute(wrapper, "component-reset-password");

    expect(component.length).toBe(1);
  });

  test("calls router.push method if there is currentUser", () => {
    const mockPushMethod = jest.fn();
    nextRouter.useRouter = jest.fn().mockReturnValue({ push: mockPushMethod });
    shallow(<UnconnectedResetPassword currentUser={{ name: "rasoul" }} />);

    expect(mockPushMethod.mock.calls[0].length).toBe(1);
    expect(mockPushMethod).toHaveBeenCalledWith("/");
  });

  test("snapshot test", () => {
    const wrapper = setup({ currentUser: null });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("renders error texts", () => {
  test("does not render error texts if there is no input empty error", () => {
    React.useState = jest
      .fn()
      .mockReturnValue([{ passErr: false, confirmPassErr: false }, jest.fn()]);
    const wrapper = setup({ currentUser: null });
    const PassErrorTextcomponent = findByTestAttribute(
      wrapper,
      "pass-error-text"
    );
    const ConfirmPassErrorTextcomponent = findByTestAttribute(
      wrapper,
      "confirm-pass-error-text"
    );
    expect(PassErrorTextcomponent.length).toBe(0);
    expect(ConfirmPassErrorTextcomponent.length).toBe(0);
  });

  test("renders pass error text if password input is empty when we submit the form", () => {
    React.useState = jest
      .fn()
      .mockReturnValue([{ passErr: true, confirmPassErr: false }, jest.fn()]);
    const wrapper = setup({ currentUser: null });
    const PassErrorTextcomponent = findByTestAttribute(
      wrapper,
      "pass-error-text"
    );
    const ConfirmPassErrorTextcomponent = findByTestAttribute(
      wrapper,
      "confirm-pass-error-text"
    );
    expect(PassErrorTextcomponent.length).toBe(1);
    expect(ConfirmPassErrorTextcomponent.length).toBe(0);
  });

  test("renders confirm pass error text if password input is empty when we submit the form", () => {
    React.useState = jest
      .fn()
      .mockReturnValue([{ passErr: false, confirmPassErr: true }, jest.fn()]);
    const wrapper = setup({ currentUser: null });
    const PassErrorTextcomponent = findByTestAttribute(
      wrapper,
      "pass-error-text"
    );
    const ConfirmPassErrorTextcomponent = findByTestAttribute(
      wrapper,
      "confirm-pass-error-text"
    );
    expect(PassErrorTextcomponent.length).toBe(0);
    expect(ConfirmPassErrorTextcomponent.length).toBe(1);
  });

  test("renders not match error text if password and confirm password are not equal", () => {
    React.useState = jest
      .fn()
      .mockReturnValue([
        { passErr: false, confirmPassErr: false, notMatchErr: true },
        jest.fn(),
      ]);
    const wrapper = setup({ currentUser: null });
    const PassErrorTextcomponent = findByTestAttribute(
      wrapper,
      "pass-error-text"
    );
    const ConfirmPassErrorTextcomponent = findByTestAttribute(
      wrapper,
      "confirm-pass-error-text"
    );
    const notMatchErrorTextcomponent = findByTestAttribute(
      wrapper,
      "notMatch-error-text"
    );
    expect(PassErrorTextcomponent.length).toBe(0);
    expect(ConfirmPassErrorTextcomponent.length).toBe(0);
    expect(notMatchErrorTextcomponent.length).toBe(1);
  });

  test("renders both error texts if password and confirmPassword input are empty when we submit the form", () => {
    React.useState = jest
      .fn()
      .mockReturnValue([{ passErr: true, confirmPassErr: true }, jest.fn()]);
    const wrapper = setup({ currentUser: null });
    const PassErrorTextcomponent = findByTestAttribute(
      wrapper,
      "pass-error-text"
    );
    const ConfirmPassErrorTextcomponent = findByTestAttribute(
      wrapper,
      "confirm-pass-error-text"
    );
    expect(PassErrorTextcomponent.length).toBe(1);
    expect(ConfirmPassErrorTextcomponent.length).toBe(1);
  });
});

test("call resetPassword action with correct arguments", () => {
  const token = "sometoken";
  const password = "some-password";
  const mockResetPassword = jest.fn();
  // React.useRef = jest.fn().mockReturnValue({ current: { value: password } });
  jest
    .spyOn(React, "useRef")
    .mockImplementation(() => ({ current: { value: password } }));

  nextRouter.useRouter = jest.fn().mockReturnValue({ query: { token } });

  const wrapper = setup({
    currentUser: null,
    resetPassword: mockResetPassword,
  });

  const formComponent = findByTestAttribute(wrapper, "reset-password-form");

  formComponent.simulate("submit", { preventDefault: jest.fn() });

  expect(mockResetPassword).toHaveBeenCalledWith({
    token,
    password,
    confirmPassword: password,
  });
});
