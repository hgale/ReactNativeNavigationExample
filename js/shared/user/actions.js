import { GoogleSignin } from 'react-native-google-signin'

import { showErrorMessage } from '../error/actions'
import { REVERSED_CLIENT_ID } from '../../shared/const'
import t from './actionTypes'

/**
 * GoogleSignin is about to make a request for the user to sign in
 */
function requestUser () {
  return (dispatch) => {
    // TODO: implement actions/etc to  Display loading indicator
    //dispatch(userLoading())
    dispatch({
      type: t.REQUEST_USER
    })
  }
}

/**
 * Store user object
 */
function updateUser (user) {
  return (dispatch) => {
    // Display loading
    //dispatch(userLoading())
    dispatch({
      type: t.UPDATE_USER,
      user
    })
  }
}

export async function setupGoogleSignin() {
  try {
    // Configure GoogleSignin with API key
    await GoogleSignin.configure({
      iosClientId: REVERSED_CLIENT_ID,
      webClientId: REVERSED_CLIENT_ID,
      offlineAccess: false
    });
  }
  catch(err) {
    // TODO:
    console.log("Google signin error", err.code, err.message);
  }
}

/**
 * Login
 */
export function login (navigator) {
  return (dispatch) => {
    dispatch(requestUser())

    GoogleSignin.signIn()
      .then((user) => {
        // User fetched successfully, store it
        dispatch(updateUser(user))
      })
      .catch((err) => {
        // This is done becase google sign in errors can be a bit long & obtuse
        if (err.code === -5) {
          dispatch(showErrorMessage("The user canceled the sign-in flow.", navigator))
        } else {
          dispatch(showErrorMessage(err.message, navigator))
        }
      })
      .done()
  }
}

/**
 * Logout
 */
export function logout () {
  return (dispatch) => {
    dispatch({
      type: t.LOGOUT
    })
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
    })
    .done()
  }
}
