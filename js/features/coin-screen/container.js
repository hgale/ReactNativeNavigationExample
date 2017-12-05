import { connect } from 'react-redux';
import React from 'react';

import fetchCoins from './actions';

import Coins from './component';

const mapStateToProps = state => ({
  coins: state.coins,
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchCoins: () => dispatch(fetchCoins(props.navigator)),
});

class CoinScreenContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCoins();
  }
  render() {
    return <Coins />;
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  CoinScreenContainer
);

export default reduxContainer;
