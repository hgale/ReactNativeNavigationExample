import { Platform } from 'react-native'

/**
 * Helper method to check if the client is Android
 */
export function isAndroid () {
  return Platform.OS === 'android'
}

/**
 * Helper method to check var is empty
 */
export function isEmptyVar (input: any): boolean {
  return input === null || input === 'undefined' || input === undefined || input === ''
}

/**
 * Helper method to convert a page into a nav page
 */
export function getNavScreen (page) {
  return {screen: page, title: page, backButtonTitle: ''}
}
