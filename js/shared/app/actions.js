import { Navigation } from 'react-native-navigation';
import { AppState, Linking } from 'react-native';
import { navigatorStyle, navTypes } from '../const';

import t from './actionTypes';

import { getNavScreen } from '../../utils';
import { pages } from '../../navigation/pages';

export function initializeApp(root) {
  return dispatch => {
    if (root === navTypes.single) {
      Navigation.startSingleScreenApp({
        screen: {
          screen: pages.INITIAL,
          navigatorStyle: navigatorStyle
        }
      });
    } else if (root === navTypes.tab) {
      Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'Counter',
            screen: pages.COUNTER,
            title: 'Counter',
            overrideBackPress: false, //this can be turned to true for android
            navigatorStyle: {},
          },
          {
            label: 'Colors',
            screen: pages.COLORS,
            title: 'Colors',
            navigatorStyle: {},
          },
        ]
      });
    } else {
      return;
    }

    Linking.getInitialURL().then(url => processOpenUrl(url, dispatch));
    dispatch(setupListeners());

    dispatch({
      type: t.INITIALIZE_APP
    });
  };
}

function setupListeners(): Function {
  return dispatch => {
    AppState.removeEventListener('change', handleAppStateChange);
    AppState.addEventListener('change', handleAppStateChange);
    Linking.removeEventListener('url', handleOpenURL);
    Linking.addEventListener('url', handleOpenURL);

    // This is used to kick off events when the app goes from background to foreground
    function handleAppStateChange(appState) {
      if (appState === 'active') {
      }
    }

    function handleOpenURL(event) {
      processOpenUrl(event.url, dispatch);
    }
  };
}

/**
 * Determines first screen after loading. Should only be called when
 * rehydration has finished.
 */
export function getStartScreen(navigator): Function {
  return (dispatch, getState) => {
    if (navigator === null) {
      return;
    }
    const startPage = getInitialPage(getState());
    navigator.resetTo(startPage);
    dispatch({
      type: t.GET_START_SCREEN
    });
  };
}

/**
 * Determines the first screen to go to. This assumes rehydration and other loaders
 * have finished.
 */
function getInitialPage(state) {
  // Determine what page to display
  return getNavScreen(pages.ENTRY);
}

function processOpenUrl(url, dispatch) {
}
