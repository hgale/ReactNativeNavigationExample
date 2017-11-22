import { GoogleSignin } from 'react-native-google-signin'

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
 //async
export function login () {
  console.log('Login entered!!!');
  return (dispatch) => {
  console.log('Call requuest entered!!!');
    dispatch(requestUser())

    GoogleSignin.signIn()
      .then((user) => {
        // User fetched successfully, store it
        dispatch(updateUser(user))
      })
      .catch((err) => {
        // TODO: implement dispatch error message event
        console.log('WRONG SIGNIN', err);
      })
      .done()
  }
}

/**
 * Logout
 */
export function logout () {
  return (dispatch) => {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      dispatch({
        type: t.LOGOUT
      })
    })
    .done()
  }
}
