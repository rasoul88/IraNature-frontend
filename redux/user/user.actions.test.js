import userActionTypes from "./user.actionTypes";
import { setCurrentUser } from "./user.actions";

describe("setCurrentUser", () => {
  test("returns an action with correct type", () => {
    const user = { name: "rasoul", email: "sahrayeDelha@gmail.com" };
    const action = setCurrentUser(user);
    expect(action).toEqual({
      type: userActionTypes.SET_CURRENT_USER,
      payload: user,
    });
  });
});
