/**
 * User reducer
 * It contains all the authentication related info
 * */

import { REHYDRATE } from 'redux-persist/constants';

import t from './actionTypes';

// Default state. It should never change
const defaultState = {
  // TODO: Move sensitive info into secure storage in a follow up diff
  accessToken: '',
  givenName: '',
  name: '',
  familyName: '',
  email: '',
  photo: '',
  accessTokenExpirationDate: '',
  serverAuthCode: '',
  id: '',
  idToken: '',
};

const initialState = defaultState;

const user = (state = defaultState, action) => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.user) {
        return Object.assign({}, action.payload.user);
      }
      return Object.assign({}, state);

    case t.LOGOUT:
      return Object.assign({}, defaultState);

    case t.UPDATE_USER:
      return Object.assign({}, defaultState, action.user);

    case t.REQUEST_USER:
    default:
      return state;
  }
};

export default user;
