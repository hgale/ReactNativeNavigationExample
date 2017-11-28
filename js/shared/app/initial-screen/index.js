/**
 * Component for initial screen.
 * With react-native-navigator, root cannot be a component, so startup tasks are contained here.
 */
import React from "react";
import { connect } from "react-redux";
import { getStartScreen } from "../actions";
import LoadingScreen from "../loading/";

const mapStateToProps = (state, props) => {
  return {
    hasRehydrationFinished: state.app.hasRehydrationFinished
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getStartScreen: () => dispatch(getStartScreen(props.navigator))
  };
};

class InitialScreenContainer extends React.Component {
  initializeAfterRehydration(props) {
    // Checks that require rehydration has finished so that if we are checking things in store,
    // i.e user logged in, etc, we know that the store has finished loading.
    if (props.hasRehydrationFinished) {
      // console.log('H');
      props.getStartScreen();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      !this.props.hasRehydrationFinished &&
      nextProps.hasRehydrationFinished
    ) {
      this.initializeAfterRehydration(nextProps);
    }
  }

  componentWillMount() {
    this.initializeAfterRehydration(this.props);
  }

  render() {
    return <LoadingScreen {...this.props} />;
  }
}

const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  InitialScreenContainer
);

export default reduxContainer;
