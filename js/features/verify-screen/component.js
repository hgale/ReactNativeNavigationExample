import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

class Verify extends React.Component {
  render() {
    const { token } = this.props;
    return (
      <View style={style.container}>
        <Text style={style.text}>Token passed in via verify: </Text>
        <Text>{token}</Text>
      </View>
    );
  }
}

Verify.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Verify;
