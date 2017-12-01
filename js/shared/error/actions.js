import t from './actionTypes';
import pages from '../../navigation/pages';

function setErrorMessage(error) {
  return dispatch => {
    dispatch({
      type: t.SET_ERROR_MESSAGE,
      error,
    });
  };
}

export default function showErrorMessage(error, navigator) {
  return dispatch => {
    dispatch(setErrorMessage(error));
    navigator.showInAppNotification({
      screen: pages.ERROR,
    });
  };
}
