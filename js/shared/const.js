import { isAndroid } from '../utils'

export const navigatorStyle = {
  navBarBackgroundColor:  'white',
  navBarTextColor: 'black',
  navBarSubtitleTextColor: 'blue',
  statusBarTextColorScheme: 'light',
  navBarButtonColor: isAndroid() ? 'transparent' : 'black',
  drawUnderNavBar: false
}

export const navTypes = {
  single: 'single',
  tab: 'tab'
}
