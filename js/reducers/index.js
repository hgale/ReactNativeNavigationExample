import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { autoRehydrate } from "redux-persist";
import { REHYDRATE } from "redux-persist/constants";
import createActionBuffer from "redux-action-buffer";
import thunk from "redux-thunk";
import Reactotron from "reactotron-react-native";

import RehydrationServices from "../services/RehydrationServices";
import colorScreen from "../features/color-screen/reducers";
import counter from "../features/counter/reducer";
import app from "../shared/app/reducers";
import loading from "../shared/app/loading/reducers";
import error from "../shared/error/reducers";
import user from "../shared/user/reducers";

const appReducer = combineReducers({
  app,
  error,
  loading,
  user,
  colorScreen,
  counter
});

const reducers = (state, action) => {
  // this could allow us to have specific code for intercepting high level actions and reseting states.
  // otherwise, let's just proceed and pass everything to the reducers
  return appReducer(state, action);
};

let middleware = [thunk, createActionBuffer(REHYDRATE)];

// a function which can create our store and auto-persist the data
export default () => {
  const enhancers = compose(autoRehydrate(), applyMiddleware(...middleware));

  const store = createStore(reducers, enhancers);

  // configure persistStore and check reducer version number
  RehydrationServices.updateReducers(store);

  return store;
};
