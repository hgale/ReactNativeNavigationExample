import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import style from "./style";

class Counter extends React.Component {
  render() {
    const { count, incrementCounter } = this.props;
    return (
      <View style={style.container}>
        <Text>{count}</Text>
        <TouchableOpacity onPress={incrementCounter} style={style.textView}>
          <Text style={style.text}>Increment counter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Counter.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

export default Counter;
