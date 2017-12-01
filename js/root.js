import { Provider } from 'react-redux';
import getStore from './reducers';

import { registerScreens } from './navigation/screens';
import { initializeApp } from './shared/app/actions';
import { navTypes } from './shared/const';

const store = getStore();

registerScreens(store, Provider);

class Root {
  constructor() {
    this._startApp();
  }

  _startApp = () => {
    store.dispatch(initializeApp(navTypes.single));
  };
}

export default Root;
