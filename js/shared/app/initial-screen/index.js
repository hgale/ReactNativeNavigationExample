/**
 * Component for initial screen.
 * With react-native-navigator, root cannot be a component, so startup tasks are contained here.
 */
import React from 'react';
import { connect } from 'react-redux';
import PushNotification from 'react-native-push-notification';
import { getStartScreen } from '../actions';
import LoadingScreen from '../loading/';

const mapStateToProps = state => ({
  hasRehydrationFinished: state.app.hasRehydrationFinished,
});

const mapDispatchToProps = (dispatch, props) => ({
  getStartScreen: () => dispatch(getStartScreen(props.navigator)),
});

function initializeAfterRehydration(props) {
  // Checks that require rehydration has finished so that if we are checking things in store,
  // i.e user logged in, etc, we know that the store has finished loading.
  if (props.hasRehydrationFinished) {
    // console.log('H');
    props.getStartScreen();
  }
}

class InitialScreenContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      !this.props.hasRehydrationFinished &&
      nextProps.hasRehydrationFinished
    ) {
      initializeAfterRehydration(nextProps);
    }
  }

  componentWillMount() {
    initializeAfterRehydration(this.props);
  }
  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
      },
    });
  }
  render() {
    return <LoadingScreen {...this.props} />;
  }
}

const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  InitialScreenContainer
);

export default reduxContainer;
