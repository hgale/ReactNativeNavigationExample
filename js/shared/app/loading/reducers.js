/**
 * Reducers/store to maintain all loading states
 */

import t from './actionTypes';

const defaultState = {
  login: false,
  coins: false,
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

    case t.COINS_LOADING:
      return Object.assign({}, state, {
        coins: true,
      });

    case t.COINS_LOADED:
      return Object.assign({}, state, {
        coins: false,
      });
    default:
      return state;
  }
};

export default loading;
