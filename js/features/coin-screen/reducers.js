/**
 * User reducer
 * It contains all the authentication related info
 * */

import { REHYDRATE } from 'redux-persist/constants';

import t from './actionTypes';

// Default state. It should never change
const defaultState = {
  coins: [],
};

const crypto = (state = defaultState, action) => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.coins) {
        return Object.assign({}, action.payload.coins);
      }
      return Object.assign({}, state);

    case t.LOGOUT:
      return Object.assign({}, defaultState);

    case t.UPDATE_COINS:
      return Object.assign({}, defaultState, { coins: action.coins });

    case t.REQUEST_COINS:
    default:
      return state;
  }
};

export default crypto;
