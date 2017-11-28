import immutableTransform from 'redux-persist-transform-immutable';
import { AsyncStorage } from 'react-native';
import { persistentStoreBlacklist } from './persist-blacklist';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: persistentStoreBlacklist,
    transforms: [immutableTransform()],
  },
};

export default REDUX_PERSIST;
