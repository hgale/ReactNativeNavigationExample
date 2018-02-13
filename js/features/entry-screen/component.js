import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

class Entry extends React.Component {
  render() {
    const {
      goToCounter,
      goToTab,
      goToLogin,
      goToCoinScreen,
      scheduleLocalNotification,
      name,
    } = this.props;
    return (
      <View style={style.container}>
        <Text>{name}</Text>
        <Text style={style.textSub}>
          This is where you put your onboarding flow, etc
        </Text>
        <TouchableOpacity onPress={goToCounter} style={style.textView}>
          <Text style={style.text}>Go to counter screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToTab} style={style.textView}>
          <Text style={style.text}>Go to tab screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToLogin} style={style.textView}>
          <Text style={style.text}>Go to login screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToCoinScreen} style={style.textView}>
          <Text style={style.text}>Go to coin screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={scheduleLocalNotification} style={style.textView}>
          <Text style={style.text}>Schedule local notification</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Entry.propTypes = {
  name: PropTypes.string.isRequired,
  goToCounter: PropTypes.func.isRequired,
  goToTab: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
  goToCoinScreen: PropTypes.func.isRequired,
  scheduleLocalNotification: PropTypes.func.isRequired,
};

export default Entry;
