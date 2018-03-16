import t from './actionTypes';
/**
 * Append a message to list
 */
export default function postMessage(message) {
  console.log('postMessage hit with message ', message);
  return dispatch => {
    dispatch({
      type: t.POST_MESSAGE,
      message: message
    });
  };
}
