import { isAndroid } from '../utils';

export const REVERSED_CLIENT_ID =
  '182768211767-jd6ktp7feiu7c9q6mligkhr9gjdnfs8d.apps.googleusercontent.com';

export const navigatorStyle = {
  navBarBackgroundColor: 'white',
  navBarTextColor: 'black',
  navBarSubtitleTextColor: 'blue',
  statusBarTextColorScheme: 'light',
  navBarButtonColor: isAndroid() ? 'transparent' : 'black',
  drawUnderNavBar: false,
};

export const navTypes = {
  single: 'single',
  tab: 'tab',
};
