import { GoogleSignin } from 'react-native-google-signin';

import { showErrorMessage } from '../error/actions';
import { REVERSED_CLIENT_ID } from '../../shared/const';
import { loginLoading, loginLoaded } from '../../shared/app/loading/actions';
import t from './actionTypes';

/**
 * GoogleSignin is about to make a request for the user to sign in
 */
function requestUser() {
  return dispatch => {
    dispatch({
      type: t.REQUEST_USER,
    });
  };
}

/**
 * Store user object
 */
function updateUser(user) {
  return dispatch => {
    dispatch({
      type: t.UPDATE_USER,
      user,
    });
  };
}

export async function setupGoogleSignin() {
  try {
    // Configure GoogleSignin with API key
    await GoogleSignin.configure({
      iosClientId: REVERSED_CLIENT_ID,
      webClientId: REVERSED_CLIENT_ID,
      offlineAccess: false,
    });
  } catch (err) {
  }
}

/**
 * Login
 */
export function login(navigator) {
  return dispatch => {
    dispatch(requestUser());
    dispatch(loginLoading());
    GoogleSignin.signIn()
      .then(user => {
        dispatch(loginLoaded());
        // User fetched successfully, store it
        dispatch(updateUser(user));
      })
      .catch(err => {
        dispatch(loginLoaded());
        // This is done becase google sign in errors can be a bit long & obtuse
        if (err.code === -5) {
          dispatch(
            showErrorMessage('The user canceled the sign-in flow.', navigator)
          );
        } else {
          dispatch(showErrorMessage(err.message, navigator));
        }
      })
      .done();
  };
}

/**
 * Logout
 */
export function logout() {
  return dispatch => {
    dispatch({
      type: t.LOGOUT,
    });
    GoogleSignin.revokeAccess()
      .then(() => GoogleSignin.signOut())
      .then(() => {})
      .done();
  };
}
