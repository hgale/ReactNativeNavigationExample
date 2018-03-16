import { connect } from 'react-redux';
import React from 'react';
import BaseContainer from '../../shared/base-container';
import Messages from './component';


const mapStateToProps = state => ({
  messages: state.messages.messages,
});

const mapDispatchToProps = dispatch => ({
});

class MessagesContainer extends BaseContainer {
  render() {
    return <Messages {...this.props} />;
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  MessagesContainer
);

export default reduxContainer;
