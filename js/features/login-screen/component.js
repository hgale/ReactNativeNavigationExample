import React from "react";
import { View } from "react-native";
import { GoogleSigninButton } from "react-native-google-signin";

import PropTypes from "prop-types";

import style from "./style";

class Login extends React.Component {
  render() {
    const { signIn } = this.props;
    return (
      <View style={style.container}>
        <GoogleSigninButton
          style={{ width: 212, height: 48 }}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Auto}
          onPress={signIn}
        />
      </View>
    );
  }
}

Login.propTypes = {
  signIn: PropTypes.func.isRequired
};

export default Login;
