import { connect } from 'react-redux'
import React from 'react'

import { incrementCounter } from './actions'
import Counter from './component'

const mapStateToProps = (state, props) => {
  return {
    count : state.counter.count
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    incrementCounter: () => dispatch(incrementCounter())
  }
}

class CounterContainer extends  React.Component {
  render () {
    return (
      <Counter {...this.props} />
    )
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer)

export default reduxContainer
