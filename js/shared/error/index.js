import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

import { isAndroid } from "../../utils";

import style from "./style";

class ErrorContainer extends Component {
  render() {
    let text;
    if (isAndroid()) {
      text = (
        <Text numberOfLines={2} style={style.content}>
          {this.props.message}
        </Text>
      );
    } else {
      text = (
        <Text numberOfLines={2} ellipsizeMode={"clip"} style={style.content}>
          {this.props.message}
        </Text>
      );
    }
    return <View style={style.container}>{text}</View>;
  }
}

const mapStateToProps = (state, props) => {
  return {
    message: state.error ? state.error.errorMessage : null
  };
};

const reduxContainer = connect(mapStateToProps)(ErrorContainer);

export default reduxContainer;
