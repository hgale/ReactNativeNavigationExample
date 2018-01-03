/** Consolidate all of the different page routes from the feature directories * */
import InitialScreenContainer from './app/initial-screen';
import ErrorContainer from './error';
import VerifyContainer from '../features/verify-screen/container';
import EntryContainer from '../features/entry-screen/container';
import LoginContainer from '../features/login-screen/container';
import ColorContainer from '../features/color-screen/container';
import CoinScreenContainer from '../features/coin-screen/container';
import CounterContainer from '../features/counter';
import pages from '../navigation/pages';

const pageMap = [
  { id: pages.INITIAL, component: InitialScreenContainer },
  { id: pages.ENTRY, component: EntryContainer },
  { id: pages.COUNTER, component: CounterContainer },
  { id: pages.COLORS, component: ColorContainer },
  { id: pages.LOGIN, component: LoginContainer },
  { id: pages.ERROR, component: ErrorContainer },
  { id: pages.COINS, component: CoinScreenContainer },
  { id: pages.VERIFY, component: VerifyContainer },
];

export default pageMap;
