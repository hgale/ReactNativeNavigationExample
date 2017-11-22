import { connect } from 'react-redux'
import React from 'react'

import { login, setupGoogleSignin } from '../../shared/user/actions'
import { isLoggedIn, getName, getPhoto, getEmail } from '../../shared/user/selectors'

import Login from './component'

const mapStateToProps = (state, props) => {
  return {
    photo: getPhoto(state, props),
    name: getName(state, props),
    email: getEmail(state, props),
    isLoggedIn: isLoggedIn(state, props)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    login: () => dispatch(login()),
    setupGoogleSignin: () => { setupGoogleSignin() }
  }
}

class LoginContainer extends React.Component {
  componentDidMount() {
    this.props.setupGoogleSignin()
  }

  render () {
    return (
      <Login signIn={this.props.login}/>
    )
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)

export default reduxContainer
