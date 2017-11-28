import { REHYDRATE } from "redux-persist/constants";
import t from "./actionTypes";

const defaultState: ErrorStateType = {
  errorMessage: null
};

const error = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGOUT":
      return Object.assign({}, defaultState);

    case REHYDRATE:
      return Object.assign({}, state);
    case t.SET_ERROR_MESSAGE:
      return Object.assign(
        {},
        {
          errorMessage: action.error
        }
      );
    default:
      return state;
  }
};

export default error;
