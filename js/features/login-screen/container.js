import { connect } from 'react-redux'
import React from 'react'
import { initializeApp } from '../../shared/app/actions'
import { navTypes, REVERSED_CLIENT_ID } from '../../shared/const'
import { pages } from '../../navigation/pages'
import { getNavScreen } from '../../utils'
import Login from './component'

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

const mapStateToProps = (state, props) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}

class LoginContainer extends React.Component {

  componentDidMount() {
    this.setupGoogleSignin()
  }

  render () {
    return (
      <Login signIn={this.signIn.bind(this)}/>
    )
  }

  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: REVERSED_CLIENT_ID,
        webClientId: REVERSED_CLIENT_ID,
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({user});
    }
    catch(err) {
      console.log("Google signin error", err.code, err.message);
    }
  }

  signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({user: user});
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done()
  }

  signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({user: null});
    })
    .done()
  }

}

// Instantiate and make the magic happen
const reduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)

export default reduxContainer
