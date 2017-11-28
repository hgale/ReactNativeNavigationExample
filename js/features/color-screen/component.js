import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

class Colors extends React.Component {
  render() {
    const { colors, generateRandomColors } = this.props;
    const colorViews = [];
    colors.map(color => {
      colorViews.push(
        <View
          key={color}
          style={[style.colorView, { backgroundColor: color }]}
        />
      );
    });
    return (
      <View style={style.container}>
        <Text style={style.title}>Color Screen</Text>
        <View style={style.colors}>{colorViews}</View>
        <TouchableOpacity onPress={generateRandomColors} style={style.button}>
          <Text style={style.buttonText}>Generate new colors</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Colors.propTypes = {
  generateRandomColors: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
};

export default Colors;
