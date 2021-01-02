import { LOGGED_IN, LOGGED_OUT } from "./actionType";

function UserReducer(state = { products: [] }, action) {
  switch (action) {
    case LOGGED_IN:
      return { LogStatus: true };
    case LOGGED_OUT:
      return { LogStatus: false };
    default:
      return { LogStatus: null };
  }
}

export { UserReducer };
