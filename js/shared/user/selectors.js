import { createSelector } from 'reselect';

/**
 * Get the user  object from state
 */
const getState = state => state;

const getUser = createSelector([getState], state => state.user);

export const getToken = createSelector([getUser], user => user.idToken);

/**
 * Return true if the user is logged in
 */
export const isLoggedIn = createSelector(
  [getToken],
  token => !!token && token.length > 0
);

export const getGivenName = createSelector([getUser], user => user.givenName);

export const getFamilyName = createSelector([getUser], user => user.familyName);

export const getName = createSelector([getUser], user => user.name);

export const getEmail = createSelector([getUser], user => user.email);

export const getPhoto = createSelector([getUser], user => user.photo);
