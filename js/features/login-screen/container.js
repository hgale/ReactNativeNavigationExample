import { connect } from 'react-redux';
import React from 'react';

import { login, setupGoogleSignin, logout } from '../../shared/user/actions';
import {
  isLoggedIn,
  getName,
  getPhoto,
  getEmail
} from '../../shared/user/selectors';
import { isLoginLoading } from '../../shared/app/loading/selectors';

import LoadingScreen from '../../shared/app/loading/';
import Login from './component';
import Profile from './profile';

const mapStateToProps = (state, props) => {
  return {
    photo: getPhoto(state, props),
    name: getName(state, props),
    email: getEmail(state, props),
    loading: isLoginLoading(state, props),
    isLoggedIn: isLoggedIn(state, props),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    login: () => dispatch(login(props.navigator)),
    logout: () => dispatch(logout()),
    setupGoogleSignin: () => {
      setupGoogleSignin();
    },
  };
};

class LoginContainer extends React.Component {
  componentDidMount() {
    this.props.setupGoogleSignin();
  }

  render() {
    const { isLoggedIn, loading } = this.props;
    if (loading) {
      return <LoadingScreen />;
    } else if (isLoggedIn) {
      return <Profile {...this.props} />;
    } else {
      return <Login signIn={this.props.login} />;
    }
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoginContainer
);

export default reduxContainer;
