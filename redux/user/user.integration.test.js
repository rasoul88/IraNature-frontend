import { setCurrentUser } from "./user.actions";
import { storeFactory } from "../../test/utils";

describe("setCurrentUser action dispatcher", () => {
  test("if user log in", () => {
    const initialState = { user: { currentUser: null } };
    const user = { name: "rasoul", email: "sahraeirasoul@gmail.com" };
    const store = storeFactory(initialState);
    store.dispatch(setCurrentUser(user));

    const expectedUserState = { currentUser: user };
    const newUserState = store.getState().user;

    expect(newUserState).toEqual(expectedUserState);
  });

  test("if user log out", () => {
    const user = { name: "rasoul", email: "sahraeirasoul@gmail.com" };
    const initialState = { user: { currentUser: user } };
    const store = storeFactory(initialState);
    store.dispatch(setCurrentUser(null));

    const expectedUserState = { currentUser: null };
    const newUserState = store.getState().user;

    expect(newUserState).toEqual(expectedUserState);
  });
});
