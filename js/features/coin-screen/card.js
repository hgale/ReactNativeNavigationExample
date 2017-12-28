import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import { cryptoImages } from '../../shared/const';
import style from './style';

const {
  cardContainer,
  image,
  moneySymbol,
  upperRow,
  coinSymbol,
  coinName,
  coinPrice,
  statisticsContainer,
  seperator,
  percentChangePlus,
  percentChangeMinus,
} = style;

class CoinCard extends React.Component {
  render() {
    const {
      symbol,
      coin_name,
      price_usd,
      percent_change_24h,
      percent_change_7d,
    } = this.props;
    return (
      <View style={cardContainer}>
        <View style={upperRow}>
          <Image style={image} source={{ uri: cryptoImages[symbol] }} />
          <Text style={coinSymbol}>{symbol}</Text>
          <Text style={seperator}>|</Text>
          <Text style={coinName}>{coin_name}</Text>
          <Text style={coinPrice}>
            {price_usd}
            <Text style={moneySymbol}> $ </Text>
          </Text>
        </View>

        <View style={statisticsContainer}>
          <Text>
            24h:
            <Text
              style={
                percent_change_24h < 0 ? percentChangeMinus : percentChangePlus
              }
            >
              {' '}
              {percent_change_24h} %{' '}
            </Text>
          </Text>
          <Text>
            7d:
            <Text
              style={
                percent_change_7d < 0 ? percentChangeMinus : percentChangePlus
              }
            >
              {' '}
              {percent_change_7d} %{' '}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

CoinCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  coin_name: PropTypes.string.isRequired,
  price_usd: PropTypes.string.isRequired,
  percent_change_24h: PropTypes.string.isRequired,
  percent_change_7d: PropTypes.string.isRequired,
};

export default CoinCard;
