import { connect } from 'react-redux';
import React from 'react';

import BaseContainer from '../../shared/base-container'

import Verify from './component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

class VerifyContainer extends BaseContainer {
  render() {
    return <Verify {...this.props} />;
  }
}

const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  VerifyContainer
);

export default reduxContainer;
