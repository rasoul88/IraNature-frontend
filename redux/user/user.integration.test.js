import { setCurrentUser } from "./user.actions";
import { storeFactory } from "../../test/utils";

describe("setCurrentUser action dispatcher", () => {
  test("if user log in", () => {
    const initialState = { user: { currentUser: null } };
    const user = { name: "rasoul", email: "sahraeirasoul@gmail.com" };
    const store = storeFactory(initialState);
    store.dispatch(setCurrentUser(user));

    const expectedState = { user: { currentUser: user } };
    const newState = store.getState();

    expect(newState).toEqual(expectedState);
  });

  test("if user log out", () => {
    const user = { name: "rasoul", email: "sahraeirasoul@gmail.com" };
    const initialState = { user: { currentUser: user } };
    const store = storeFactory(initialState);
    store.dispatch(setCurrentUser(null));

    const expectedState = { user: { currentUser: null } };
    const newState = store.getState();

    expect(newState).toEqual(expectedState);
  });
});
