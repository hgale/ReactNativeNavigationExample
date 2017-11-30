import t from './actionTypes';
/**
 * Regenerate random colors
 */
export default function updateColors() {
  return dispatch => {
    dispatch({
      type: t.UPDATE_COLORS,
    });
  };
}
