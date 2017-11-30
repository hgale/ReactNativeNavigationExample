import t from './actionTypes';
/**
 * Increment counter
 */
export default function incrementCounter() {
  return dispatch => {
    dispatch({
      type: t.INCREMENT_COUNTER,
    });
  };
}
