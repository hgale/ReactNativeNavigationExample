/**
 * App reducer
 * It should contain app related data and it should not persist
 */

import { REHYDRATE } from 'redux-persist/constants';
import t from './actionTypes';

const defaultState = {
  hasRehydrationFinished: false,
  appName: '',
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return Object.assign({}, action.payload.app, {
        hasRehydrationFinished: true,
        appName: 'RNN Demo',
      });

    case t.GET_START_SCREEN:
      return state;

    case t.INITIALIZE_APP:
      return state;

    default:
      return state;
  }
};

export default app;
