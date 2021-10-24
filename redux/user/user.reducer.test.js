import userReducer from "./user.reducer";
import { setCurrentUser } from "./user.actions";

describe("userReducer", () => {
  test("return default initial state when no action is passed", () => {
    const state = userReducer(undefined, {});
    expect(state.currentUser).toBe(null);
  });

  test("returns 'user' when setCurrentUser is passed", () => {
    const user = { name: "rasoul", email: "sahrayeDelha@gmail.com" };
    const state = userReducer(undefined, setCurrentUser(user));
    expect(state.currentUser).toBe(user);
  });
});
