import immutableTransform from 'redux-persist-transform-immutable'
import { persistentStoreBlacklist } from './persist-blacklist'
import { AsyncStorage } from 'react-native'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: persistentStoreBlacklist,
    transforms: [immutableTransform()]
  }
}

export default REDUX_PERSIST
