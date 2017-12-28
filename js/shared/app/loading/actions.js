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

export function coinsLoading() {
  return {
    type: t.COINS_LOADING,
  };
}

export function coinsLoaded() {
  return {
    type: t.COINS_LOADED,
  };
}
