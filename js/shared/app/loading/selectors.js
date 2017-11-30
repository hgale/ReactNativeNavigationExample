import { createSelector } from 'reselect';

const getLoading = (state, props) => state.loading;

export const isLoginLoading = createSelector(
  [getLoading],
  loading => loading.login
);

export const isAnythingLoading = createSelector([getLoading], loading => {
  for (const key in loading) {
    if (key === true) {
      return true;
    }
  }
  return false;
});
