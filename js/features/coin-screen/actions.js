import showErrorMessage from '../../shared/error/actions';
import { coinAPIBaseURL } from '../../shared/const';
import { coinsLoading, coinsLoaded } from '../../shared/app/loading/actions';
import t from './actionTypes';

/**
 * About to make a request coins
 */
function requestCoins() {
  return dispatch => {
    dispatch({
      type: t.REQUEST_COINS,
    });
  };
}

/**
 * Store coins object
 */
function updateCoins(coins) {
  return dispatch => {
    dispatch({
      type: t.UPDATE_COINS,
      coins,
    });
  };
}

/**
 * fetch coins from API
 */
export default function fetchCoins(navigator) {
  return dispatch => {
    dispatch(requestCoins());
    dispatch(coinsLoading());

    fetch(`${coinAPIBaseURL}/v1/ticker/?limit=10`)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(coinsLoaded());
        dispatch(updateCoins(responseJson));
      })
      .catch(error => {
        dispatch(coinsLoaded());
        dispatch(showErrorMessage(error, navigator));
      });
  };
}
