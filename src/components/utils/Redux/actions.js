import { LOGGED_IN } from "./actionType";

export const Logged = () => (dispatch) => {
  dispatch({ type: LOGGED_IN });
};
