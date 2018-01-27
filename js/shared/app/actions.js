import { Navigation } from 'react-native-navigation';
import { AppState, Linking, Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

import { navigatorStyle, navTypes } from '../const';

import t from './actionTypes';

import { getNavScreen, checkPageValid } from '../../utils';
import pages from '../../navigation/pages';

export function initializeApp(root) {
  return dispatch => {
    if (root === navTypes.single) {
      Navigation.startSingleScreenApp({
        screen: {
          screen: pages.INITIAL,
          navigatorStyle,
        },
      });
    } else if (root === navTypes.tab) {
      Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'Counter',
            screen: pages.COUNTER,
            icon: require('../assets/icons8-chart-50.png'),
            title: 'Counter',
            overrideBackPress: false, // this can be turned to true for android
            navigatorStyle: {},
          },
          {
            label: 'Colors',
            icon: require('../assets/icons8-chart-50.png'),
            screen: pages.COLORS,
            title: 'Colors',
            navigatorStyle: {},
          },
        ],
      });
    } else {
      return;
    }

    Linking.getInitialURL().then(url => processOpenUrl(url, dispatch));
    dispatch(setupListeners());

    dispatch({
      type: t.INITIALIZE_APP,
    });
  };
}

function setupListeners() {
  return dispatch => {
    AppState.removeEventListener('change', handleAppStateChange);
    AppState.addEventListener('change', handleAppStateChange);
    Linking.removeEventListener('url', handleOpenURL);
    Linking.addEventListener('url', handleOpenURL);
    // Push notification related code
    PushNotification.configure({
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
      },
    });
    // This is used to kick off events when the app goes from background to foreground
    function handleAppStateChange(appState) {
      if (appState === 'background') {
        let date = new Date(Date.now() + (5 * 1000));

        // if (Platform.OS === 'ios') {
        //   date = date.toISOString();
        // }

        PushNotification.localNotificationSchedule({
          message: "My Notification Message",
          date,
        });
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
export function getStartScreen(navigator) {
  return (dispatch, getState) => {
    if (navigator === null) {
      return;
    }
    const startPage = getInitialPage(getState());
    navigator.resetTo(startPage);
    dispatch({
      type: t.GET_START_SCREEN,
    });
  };
}

/**
 * Determines the first screen to go to. This assumes rehydration and other loaders
 * have finished.
 */
function getInitialPage() {
  // Determine what page to display
  return getNavScreen(pages.ENTRY);
}

function processOpenUrl(url, dispatch) {
  let tokens = url.split('/');
  if (tokens && tokens.length >= 4 && checkPageValid(tokens[3])) {
    let page = tokens[3]
    let payload = ''
    if (page === pages.VERIFY) {
      let token = url.split('=').pop()
      payload = token
    }
    Navigation.handleDeepLink({
      link: tokens[3],
      payload: payload
    });
  }
}
