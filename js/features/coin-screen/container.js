import { connect } from 'react-redux';
import React from 'react';

import BaseContainer from '../../shared/base-container';
import fetchCoins from './actions';
import { areCoinsLoading } from '../../shared/app/loading/selectors';
import { getCoins } from './selectors';

import LoadingScreen from '../../shared/app/loading/';
import Coins from './component';

const mapStateToProps = state => ({
  coins: getCoins(state),
  loading: areCoinsLoading(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchCoins: () => dispatch(fetchCoins(props.navigator)),
});

class CoinScreenContainer extends BaseContainer {
  componentDidMount() {
    this.props.fetchCoins();
  }

  render() {
    const { coins, loading } = this.props;
    if (loading) {
      return <LoadingScreen />;
    }
    return <Coins coins={coins} />;
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  CoinScreenContainer
);

export default reduxContainer;
