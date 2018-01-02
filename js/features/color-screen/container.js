import { connect } from 'react-redux';
import React from 'react';
import BaseContainer from '../../shared/base-container';
import Colors from './component';
import updateColors from './actions';

const mapStateToProps = state => ({
  colors: state.colorScreen.colors,
});

const mapDispatchToProps = dispatch => ({
  generateRandomColors: () => dispatch(updateColors()),
});

class ColorContainer extends BaseContainer {
  render() {
    return <Colors {...this.props} />;
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  ColorContainer
);

export default reduxContainer;
