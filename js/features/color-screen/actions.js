import t from './actionTypes';
/**
 * Regenerate random colors
 */
export function updateColors() {
  return dispatch => {
    dispatch({
      type: t.UPDATE_COLORS,
    });
  };
}
