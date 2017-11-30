/**
 * Reducers/store to maintain all loading states
 */

import t from './actionTypes';

const defaultState = {
  login: false,
};

const loading = (state = defaultState, action) => {
  switch (action.type) {
    case t.LOGIN_LOADING:
      return Object.assign({}, state, {
        login: true,
      });

    case t.LOGIN_LOADED:
      return Object.assign({}, state, {
        login: false,
      });
    default:
      return state;
  }
};

export default loading;
