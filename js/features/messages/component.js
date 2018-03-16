import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    const messageViews = [];
    messages.map((message, index) => {
      messageViews.push(
        <View key={index}>
          <Text> {message} </Text>
        </View>
      );
    });
    return (
      <View style={style.container}>
        <Text style={style.title}>Message Count: {messages.length}</Text>
        <View style={style.messages}>{messageViews}</View>
      </View>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Messages;
