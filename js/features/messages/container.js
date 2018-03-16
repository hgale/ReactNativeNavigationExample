import { connect } from 'react-redux';
import React from 'react';
import BaseContainer from '../../shared/base-container';
import Messages from './component';


const mapStateToProps = state => ({
  messages: state.messages.messages,
});

// const mapStateToProps = (state, ownProps) => {
//   console.log('Enter the dragon');
//   console.log(state); // state
//   return { messages: state.messageScreen }
// }

const mapDispatchToProps = dispatch => ({
});

class MessagesContainer extends BaseContainer {
  render() {
    console.log('The messages passed in are');
    console.log(this.props.message);
    return <Messages {...this.props} />;
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  MessagesContainer
);

export default reduxContainer;
