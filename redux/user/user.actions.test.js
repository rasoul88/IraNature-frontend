import userActionTypes from "./user.actionTypes";
import { signInSuccess } from "./user.actions";

describe("setCurrentUser", () => {
  test("returns an action with correct type", () => {
    const user = { name: "rasoul", email: "sahrayeDelha@gmail.com" };
    const action = signInSuccess(user);
    expect(action).toEqual({
      type: userActionTypes.SIGN_IN_SUCCESS,
      payload: user,
    });
  });
});
