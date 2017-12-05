import React from 'react';
import { Text, View } from 'react-native';

import style from './style';

class Coins extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Coins</Text>
        <Text style={style.textSub}>Coins go here</Text>
      </View>
    );
  }
}

export default Coins;
