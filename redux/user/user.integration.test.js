import { signInSuccess } from "./user.actions";
import { storeFactory } from "../../test/utils";

describe("setCurrentUser action dispatcher", () => {
  test("if user log in", () => {
    const initialState = { user: { currentUser: null, error: null } };
    const user = { name: "rasoul", email: "sahraeirasoul@gmail.com" };
    const store = storeFactory(initialState);
    store.dispatch(signInSuccess(user));

    const expectedUserState = { currentUser: user, error: null };
    const newUserState = store.getState().user;

    expect(newUserState).toEqual(expectedUserState);
  });

  test("if user log out", () => {
    const user = { name: "rasoul", email: "sahraeirasoul@gmail.com" };
    const initialState = { user: { currentUser: user, error: null } };
    const store = storeFactory(initialState);
    store.dispatch(signInSuccess(null));

    const expectedUserState = { currentUser: null, error: null };
    const newUserState = store.getState().user;

    expect(newUserState).toEqual(expectedUserState);
  });
});
