import { Navigation } from "react-native-navigation";
import React from "react";

import * as rootExports from "../shared/routes";

export const pagesMap = rootExports.pageMap;

export function registerScreens(store, Provider) {
  for (let pageItem of pagesMap) {
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
