import React from "react";
import { shallow } from "enzyme";
import ForgotPasswordForm from "./forgotPassword-form.component";
import { findByTestAttribute } from "../../test/utils";

const setup = (props) => {
  return shallow(<ForgotPasswordForm {...props} />);
};

test("renders error texts correctly", () => {
  const email = null;
  React.useRef = jest.fn().mockReturnValue({
    current: { value: email },
  });

  const mockForgotPassword = jest.fn();
  const wrapper = setup({ forgotPassword: mockForgotPassword });
  const formComponent = findByTestAttribute(
    wrapper,
    "component-forgotPasssword-form"
  );
  formComponent.simulate("submit", { preventDefault: jest.fn() });

  const emailErrorText = findByTestAttribute(wrapper, "email-error-text");

  expect(emailErrorText.length).toBe(email ? 0 : 1);
});

test("calls forgotPassword action with correct arguments", () => {
  const email = "sahraeirasoul@gmail.com";
  React.useRef = jest.fn().mockReturnValue({
    current: { value: email },
  });
  const mockForgotPassword = jest.fn();
  const wrapper = setup({ forgotPassword: mockForgotPassword });
  const formComponent = findByTestAttribute(
    wrapper,
    "component-forgotPasssword-form"
  );
  formComponent.simulate("submit", { preventDefault: jest.fn() });

  expect(mockForgotPassword).toHaveBeenCalledWith(email);
});
