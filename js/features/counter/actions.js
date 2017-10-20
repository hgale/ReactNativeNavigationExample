import t from './actionTypes'
/**
 * Increment counter
 */
export function incrementCounter () {
  return (dispatch) => {
    dispatch({
      type: t.INCREMENT_COUNTER
    })
  }
}
