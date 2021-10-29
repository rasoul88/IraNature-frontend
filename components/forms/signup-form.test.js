import React from "react";
import { shallow } from "enzyme";
import SignUpForm from "./signup-form.component";
import { findByTestAttribute } from "../../test/utils";

const setup = (props) => {
  return shallow(<SignUpForm {...props} />);
};

test("renders error texts correctly", () => {
  const simulateCredentials = {
    name: "Rasoul",
    email: null,
    password: "rasoul",
    confirmPassword: null,
  };
  React.useRef = jest.fn().mockReturnValue({
    current: [
      { value: simulateCredentials.name },
      { value: simulateCredentials.email },
      { value: simulateCredentials.password },
      { value: simulateCredentials.confirmPassword },
    ],
  });

  const mocksignUpStart = jest.fn();
  const wrapper = setup({ signUpStart: mocksignUpStart });
  const formComponent = findByTestAttribute(wrapper, "component-signup-form");
  formComponent.simulate("submit", { preventDefault: jest.fn() });

  const nameErrorText = findByTestAttribute(wrapper, "name-error-text");
  const emailErrorText = findByTestAttribute(wrapper, "email-error-text");
  const passwordErrorText = findByTestAttribute(wrapper, "password-error-text");
  const confirmPasswordErrorText = findByTestAttribute(
    wrapper,
    "confirmPassword-error-text"
  );

  expect(nameErrorText.length).toBe(simulateCredentials.name ? 0 : 1);
  expect(emailErrorText.length).toBe(simulateCredentials.email ? 0 : 1);
  expect(passwordErrorText.length).toBe(simulateCredentials.password ? 0 : 1);
  expect(confirmPasswordErrorText.length).toBe(
    simulateCredentials.confirmPassword ? 0 : 1
  );
});

test("calls signUpStart action with correct arguments", () => {
  const simulateCredentials = {
    name: "Rasoul",
    email: "sahraeirasoul@gmail.com",
    password: "rasoul",
    confirmPassword: "rasoul",
  };
  React.useRef = jest.fn().mockReturnValue({
    current: [
      { value: simulateCredentials.name },
      { value: simulateCredentials.email },
      { value: simulateCredentials.password },
      { value: simulateCredentials.confirmPassword },
    ],
  });

  const mocksignUpStart = jest.fn();

  const wrapper = setup({ signUpStart: mocksignUpStart });
  const formComponent = findByTestAttribute(wrapper, "component-signup-form");
  formComponent.simulate("submit", { preventDefault: jest.fn() });

  expect(mocksignUpStart).toHaveBeenCalledWith(simulateCredentials);
});
