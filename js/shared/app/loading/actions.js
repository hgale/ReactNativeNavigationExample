/**
 * Add actions for different loading states
 */

import t from './actionTypes';

export function loginLoading() {
  return {
    type: t.LOGIN_LOADING,
  };
}

export function loginLoaded() {
  return {
    type: t.LOGIN_LOADED,
  };
}
