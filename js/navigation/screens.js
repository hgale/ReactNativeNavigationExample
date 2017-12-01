import { Navigation } from 'react-native-navigation';

import pagesMap from '../shared/routes';

export function registerScreens(store, Provider) {
  for (const pageItem of pagesMap) {
    registerScreen(pageItem, store, Provider);
  }
}

/**
 * Internal function to register an individual screen.
 */
export function registerScreen(pageMapItem, store, Provider) {
  Navigation.registerComponent(
    pageMapItem.id,
    () => pageMapItem.component,
    store,
    Provider
  );
}
