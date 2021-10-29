import React from "react";
import { shallow } from "enzyme";
import SignInForm from "./signin-form.component";
import { findByTestAttribute } from "../../test/utils";

const setup = (props) => {
  return shallow(<SignInForm {...props} />);
};

test("renders error texts correctly", () => {
  const simulateCredentials = {
    email: null,
    password: "rasoul",
  };
  React.useRef = jest.fn().mockReturnValue({
    current: [
      { value: simulateCredentials.email },
      { value: simulateCredentials.password },
    ],
  });

  const mockEmailSignInStart = jest.fn();
  const wrapper = setup({ emailSignInStart: mockEmailSignInStart });
  const formComponent = findByTestAttribute(wrapper, "component-signin-form");
  formComponent.simulate("submit", { preventDefault: jest.fn() });

  const emailErrorText = findByTestAttribute(wrapper, "email-error-text");
  const passwordErrorText = findByTestAttribute(wrapper, "password-error-text");

  expect(emailErrorText.length).toBe(simulateCredentials.email ? 0 : 1);
  expect(passwordErrorText.length).toBe(simulateCredentials.password ? 0 : 1);
});

test("calls emailSignInStart action with correct arguments", () => {
  const simulateCredentials = {
    email: "sahraeirasoul@gmail.com",
    password: "rasoul",
  };
  React.useRef = jest.fn().mockReturnValue({
    current: [
      { value: simulateCredentials.email },
      { value: simulateCredentials.password },
    ],
  });

  const mockEmailSignInStart = jest.fn();
  const wrapper = setup({ emailSignInStart: mockEmailSignInStart });
  const formComponent = findByTestAttribute(wrapper, "component-signin-form");
  formComponent.simulate("submit", { preventDefault: jest.fn() });

  expect(mockEmailSignInStart).toHaveBeenCalledWith(simulateCredentials);
});
