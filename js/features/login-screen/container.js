import { connect } from 'react-redux';
import React from 'react';

import BaseContainer from '../../shared/base-container';
import { login, setupGoogleSignin, logout } from '../../shared/user/actions';
import {
  isLoggedIn,
  getName,
  getPhoto,
  getEmail,
} from '../../shared/user/selectors';
import { isLoginLoading } from '../../shared/app/loading/selectors';

import LoadingScreen from '../../shared/app/loading/';
import Login from './component';
import Profile from './profile';

const mapStateToProps = state => ({
  photo: getPhoto(state),
  name: getName(state),
  email: getEmail(state),
  loading: isLoginLoading(state),
  loggedIn: isLoggedIn(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  login: () => dispatch(login(props.navigator)),
  logout: () => dispatch(logout()),
  setupGoogleSignin: () => {
    setupGoogleSignin();
  },
});

class LoginContainer extends BaseContainer {
  componentDidMount() {
    this.props.setupGoogleSignin();
  }

  render() {
    const { loggedIn, loading } = this.props;
    if (loading) {
      return <LoadingScreen />;
    } else if (loggedIn) {
      return <Profile {...this.props} />;
    }
    return <Login signIn={this.props.login} />;
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoginContainer
);

export default reduxContainer;
