import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import * as nextRouter from "next/router";

import { findByTestAttribute } from "../../test/utils";
import Navigation from "./navigation.component";

const setup = (props = {}) => {
  return shallow(<Navigation {...props} />);
};

beforeAll(() => {
  nextRouter.useRouter = jest.fn().mockReturnValue({ pathname: "/" });
});

test("renders `Navigation` component", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "component-navigation");
  expect(component.length).toBe(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("renders `burger-menu` component", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "burger-menu");
  expect(component.length).toBe(1);
});

describe("renders `user-controller` component", () => {
  beforeEach(() => {
    nextRouter.useRouter = jest.fn().mockReturnValue({ pathname: "/" });
  });
  test("renders if pathname is not `/signin` and `currentUser` exists", () => {
    const wrapper = setup({ currentUser: { name: "رسول صحرایی" } });
    const component = findByTestAttribute(wrapper, "user-controller");
    expect(component.length).toBe(1);
  });

  test("does not render if pathname is not `/signin` and `currentUser` doesn't exist", () => {
    const wrapper = setup({ currentUser: null });
    const component = findByTestAttribute(wrapper, "user-controller");
    expect(component.length).toBe(0);
  });

  test("does not render if pathname is `/signin`", () => {
    nextRouter.useRouter = jest.fn().mockReturnValue({ pathname: "/signin" });
    const wrapper = setup({ currentUser: null });
    const component = findByTestAttribute(wrapper, "user-controller");
    expect(component.length).toBe(0);
  });
});

describe("renders `login-controller` component", () => {
  beforeEach(() => {
    nextRouter.useRouter = jest.fn().mockReturnValue({ pathname: "/" });
  });
  test("renders if pathname is not `/signin` and `currentUser` does not exist", () => {
    const wrapper = setup({ currentUser: null });
    const component = findByTestAttribute(wrapper, "login-controller");
    expect(component.length).toBe(1);
  });

  test("does not render if pathname is not `/signin` and `currentUser` exists", () => {
    const wrapper = setup({ currentUser: { name: "رسول صحرایی" } });
    const component = findByTestAttribute(wrapper, "login-controller");
    expect(component.length).toBe(0);
  });

  test("does not render if pathname is `/signin`", () => {
    nextRouter.useRouter = jest.fn().mockReturnValue({ pathname: "/signin" });
    const wrapper = setup();
    const component = findByTestAttribute(wrapper, "login-controller");
    expect(component.length).toBe(0);
  });
});
