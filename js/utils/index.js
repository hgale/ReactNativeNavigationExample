import { Platform } from 'react-native';

import pages from '../navigation/pages';

/**
 * Helper method to check if the client is Android
 */
export function isAndroid() {
  return Platform.OS === 'android';
}

/**
 * Helper method to check var is empty
 */
export function isEmptyVar(input) {
  return (
    input === null ||
    input === 'undefined' ||
    input === undefined ||
    input === ''
  );
}

/**
 * Helper method to convert a page into a nav page
 */
export function getNavScreen(page) {
  return { screen: page, title: page, backButtonTitle: '' };
}

/**
 * Helper method to check if a page exists
 */
export function checkPageValid (page) {
  return Object.keys(pages).some(function (k) { return pages[k] === page })
}
